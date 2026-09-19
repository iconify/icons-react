import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3w80_cxj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3w80_cxj"/>`,
		"fallback": "cib:spring",
	});
}

export default Component;

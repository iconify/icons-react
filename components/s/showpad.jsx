import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foa44bdgf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foa44bdgf"/>`,
		"fallback": "cib:showpad",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bejm4_j3x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bejm4_j3x"/>`,
		"fallback": "foundation:telephone-accessible",
	});
}

export default Component;

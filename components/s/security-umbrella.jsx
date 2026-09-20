import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl20nzbtj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl20nzbtj"/>`,
		"fallback": "streamline-flex:security-umbrella",
	});
}

export default Component;

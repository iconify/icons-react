import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfceo3lpf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfceo3lpf"/>`,
		"fallback": "fa7-solid:shop-slash",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8ul-wbxh.css';

const viewBox = {"width":184.201,"height":38.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8ul-wbxh"/>`,
		"fallback": "thesvg-color:staples",
	});
}

export default Component;

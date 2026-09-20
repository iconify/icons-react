import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mviofevqj.css';
import '../../css/a/agjpmbbbw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mviofevqj"/><path class="agjpmbbbw"/>`,
		"fallback": "streamline-pixel:interface-essential-send-mail",
	});
}

export default Component;

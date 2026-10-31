import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iq695i6ax.css';
import '../../css/j/jyy1emnfj.css';
import '../../css/j/j3xl1tijc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="iq695i6ax"/><path class="jyy1emnfj"/><path class="j3xl1tijc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:usb",
	});
}

export default Component;

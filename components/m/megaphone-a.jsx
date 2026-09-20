import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c7zkydbij.css';
import '../../css/c/ct9fr6bou.css';
import '../../css/s/shz66wb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c7zkydbij"/><path class="ct9fr6bou"/><path class="shz66wb0b"/></g>`,
		"fallback": "mage:megaphone-a",
	});
}

export default Component;

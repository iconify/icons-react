import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf-mujbtt.css';
import '../../css/b/bvjkk-_ua.css';
import '../../css/g/g6oiphjjx.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/i2wianfxh.css';
import '../../css/g/gy-7c6b-p.css';
import '../../css/f/f0c1tgb3i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf-mujbtt"/><path class="bvjkk-_ua"/><path class="g6oiphjjx"/><g class="jn8qy4bru"><path class="i2wianfxh"/><path class="gy-7c6b-p"/><path class="f0c1tgb3i"/></g>`,
		"fallback": "openmoji:shovel",
	});
}

export default Component;

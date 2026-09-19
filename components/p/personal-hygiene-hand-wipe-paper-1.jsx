import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/frx29rbpz.css';
import '../../css/c/ceukzxkbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="frx29rbpz"/><path class="ceukzxkbu"/></g>`,
		"fallback": "covid:personal-hygiene-hand-wipe-paper-1",
	});
}

export default Component;

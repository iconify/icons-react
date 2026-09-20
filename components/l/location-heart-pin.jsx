import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j3_u2j1qo.css';
import '../../css/c/c65qq3bhq.css';
import '../../css/l/la7s6o9xp.css';
import '../../css/y/yawy4nast.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="j3_u2j1qo"/><path class="c65qq3bhq"/><path class="la7s6o9xp"/><path class="yawy4nast"/></g>`,
		"fallback": "streamline-plump-color:location-heart-pin",
	});
}

export default Component;

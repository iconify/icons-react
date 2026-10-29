import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/td6d03bko.css';
import '../../css/w/wqipoxb1e.css';
import '../../css/b/b-emnbbki.css';
import '../../css/l/lfk7tkbee.css';
import '../../css/j/jy843347v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="td6d03bko wm-shadow"/><path class="wqipoxb1e"/><path class="b-emnbbki"/><path class="lfk7tkbee"/><path class="jy843347v wm-deco"/></g>`,
		"fallback": "withicons-sticker:more-horizontal",
	});
}

export default Component;

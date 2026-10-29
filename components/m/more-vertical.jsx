import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g95zxtbyl.css';
import '../../css/t/t_4fe8b5i.css';
import '../../css/d/dgsy4dbep.css';
import '../../css/x/xz_tv_b7d.css';
import '../../css/a/a1a9w6bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="g95zxtbyl wm-shadow"/><path class="t_4fe8b5i"/><path class="dgsy4dbep"/><path class="xz_tv_b7d"/><path class="a1a9w6bmd wm-deco"/></g>`,
		"fallback": "withicons-sticker:more-vertical",
	});
}

export default Component;

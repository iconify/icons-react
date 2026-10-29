import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4yq6cc6d.css';
import '../../css/q/q3y4njx8r.css';
import '../../css/w/wgdwuab-i.css';
import '../../css/h/hodo24pvk.css';
import '../../css/u/uuapkibtt.css';
import '../../css/f/fktdalw_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow x4yq6cc6d"/><path class="q3y4njx8r"/><path class="wgdwuab-i"/><path class="hodo24pvk"/><path class="uuapkibtt wm-shine"/><path class="fktdalw_g wm-deco"/></g>`,
		"fallback": "withicons-sticker:mountain",
	});
}

export default Component;

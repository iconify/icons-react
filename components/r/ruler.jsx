import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gy3k4rbvj.css';
import '../../css/k/k9yitlb8a.css';
import '../../css/c/c286_qb6t.css';
import '../../css/u/uirldtn5m.css';
import '../../css/f/fd65gacpc.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gy3k4rbvj wm-shadow"/><path class="k9yitlb8a"/><path class="c286_qb6t"/><path class="uirldtn5m"/><path class="fd65gacpc wm-shine"/><path class="aexe23bqk wm-deco"/></g>`,
		"fallback": "withicons-sticker:ruler",
	});
}

export default Component;

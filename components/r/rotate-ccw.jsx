import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n5mptvbin.css';
import '../../css/p/p-fqadbpj.css';
import '../../css/p/p2uf0lbbs.css';
import '../../css/l/l7ntalb5n.css';
import '../../css/i/i0hhl7zeu.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="n5mptvbin wm-shadow"/><path class="p-fqadbpj"/><path class="p2uf0lbbs"/><path class="l7ntalb5n"/><path class="i0hhl7zeu wm-shine"/><path class="q_yw93bsi wm-deco"/></g>`,
		"fallback": "withicons-sticker:rotate-ccw",
	});
}

export default Component;

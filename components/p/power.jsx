import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/eque-cb0l.css';
import '../../css/u/u13jz96nf.css';
import '../../css/f/fywzvr1fl.css';
import '../../css/q/qegogjbre.css';
import '../../css/o/ov3mdc9gc.css';
import '../../css/g/gz3kls-hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="eque-cb0l wm-shadow"/><path class="u13jz96nf"/><path class="fywzvr1fl"/><path class="qegogjbre"/><path class="ov3mdc9gc wm-shine"/><path class="gz3kls-hq wm-deco"/></g>`,
		"fallback": "withicons-sticker:power",
	});
}

export default Component;

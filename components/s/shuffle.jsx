import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/osa-h2b5z.css';
import '../../css/y/y3dnb7bop.css';
import '../../css/q/qm8-qvo3k.css';
import '../../css/a/a3lcqtk1j.css';
import '../../css/i/i-a-lubyv.css';
import '../../css/e/e7ti8mbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="osa-h2b5z wm-shadow"/><path class="y3dnb7bop"/><path class="qm8-qvo3k"/><path class="a3lcqtk1j"/><path class="i-a-lubyv wm-shine"/><path class="e7ti8mbko wm-deco"/></g>`,
		"fallback": "withicons-sticker:shuffle",
	});
}

export default Component;

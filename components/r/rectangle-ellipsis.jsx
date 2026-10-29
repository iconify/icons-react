import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tacx_7baw.css';
import '../../css/h/hij61d-4f.css';
import '../../css/p/pyn290xsk.css';
import '../../css/f/fjdkc5b-b.css';
import '../../css/f/f44ah4b9l.css';
import '../../css/s/shilnfbvj.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tacx_7baw wm-shadow"/><path class="hij61d-4f"/><path class="pyn290xsk"/><path class="fjdkc5b-b"/><path class="f44ah4b9l wm-shine"/><path class="shilnfbvj wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`,
		"fallback": "withicons-sticker:rectangle-ellipsis",
	});
}

export default Component;

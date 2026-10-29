import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l9tt5qbci.css';
import '../../css/s/sja2cpbel.css';
import '../../css/g/g00-rrbru.css';
import '../../css/x/x39hfpb3z.css';
import '../../css/n/nc98-7a2a.css';
import '../../css/v/v58hby3rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="l9tt5qbci wm-shadow"/><path class="sja2cpbel"/><path class="g00-rrbru"/><path class="x39hfpb3z"/><path class="nc98-7a2a wm-shine"/><path class="v58hby3rh wm-deco"/></g>`,
		"fallback": "withicons-sticker:sliders",
	});
}

export default Component;

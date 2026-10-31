import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r_3m8gyue.css';
import '../../css/a/aovuyqb0g.css';
import '../../css/n/nag_o8bzi.css';
import '../../css/t/t_jrdsb4n.css';
import '../../css/l/lptgplb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="r_3m8gyue"/><path class="aovuyqb0g wm-shine"/><path class="nag_o8bzi wm-k"/><path class="t_jrdsb4n wm-a"/><path class="lptgplb-t wm-deco"/></g>`,
		"fallback": "withicons-kawaii:pipette",
	});
}

export default Component;

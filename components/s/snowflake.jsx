import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bj2fzcbiw.css';
import '../../css/u/umsd1ybnz.css';
import '../../css/u/uxuzvbc5k.css';
import '../../css/f/f4zdovoex.css';
import '../../css/u/uhc4r3bpq.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="bj2fzcbiw wm-shadow"/><path class="umsd1ybnz"/><path class="uxuzvbc5k"/><path class="f4zdovoex"/><path class="uhc4r3bpq wm-shine"/><path class="usyb2xbzn wm-deco"/></g>`,
		"fallback": "withicons-sticker:snowflake",
	});
}

export default Component;

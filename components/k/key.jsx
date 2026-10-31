import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fo6ckckbm.css';
import '../../css/r/r1jovh7-n.css';
import '../../css/d/dejibwb3i.css';
import '../../css/y/y-cvv-mml.css';
import '../../css/w/wnt_kzr_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fo6ckckbm wm-shadow"/><path class="r1jovh7-n wm-shadow"/><path class="dejibwb3i"/><path class="y-cvv-mml"/><path class="wnt_kzr_e"/></g>`,
		"fallback": "withicons-brutal:key",
	});
}

export default Component;

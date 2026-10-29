import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_sbmst1y.css';
import '../../css/e/el_7qjb5j.css';
import '../../css/t/twn9oxeew.css';
import '../../css/m/mqak27l0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u_sbmst1y wm-k"/><path class="el_7qjb5j wm-a"/><path class="twn9oxeew wm-k"/><path class="mqak27l0q wm-a"/></g>`,
		"fallback": "withicons:reply-sketch",
	});
}

export default Component;

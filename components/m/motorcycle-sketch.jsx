import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hgykuurez.css';
import '../../css/w/w18n-2bbj.css';
import '../../css/e/eojrhrb4s.css';
import '../../css/m/manj_xg0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hgykuurez wm-k"/><path class="w18n-2bbj wm-a"/><path class="eojrhrb4s wm-k"/><path class="manj_xg0q wm-a"/></g>`,
		"fallback": "withicons:motorcycle-sketch",
	});
}

export default Component;

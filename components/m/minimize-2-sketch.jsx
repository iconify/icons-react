import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r72-5pblm.css';
import '../../css/n/n0rfpxv8v.css';
import '../../css/u/uera-ebmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r72-5pblm wm-k"/><path class="n0rfpxv8v wm-k"/><path class="uera-ebmf wm-a"/></g>`,
		"fallback": "withicons:minimize-2-sketch",
	});
}

export default Component;

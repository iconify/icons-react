import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fe-6m83ye.css';
import '../../css/g/gf4x890sv.css';
import '../../css/j/jyce257fr.css';
import '../../css/o/oia2u1l4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fe-6m83ye"/><path class="gf4x890sv wm-a"/><path class="jyce257fr wm-k"/><path class="oia2u1l4x wm-a"/></g>`,
		"fallback": "withicons:notepad-text-sketch",
	});
}

export default Component;

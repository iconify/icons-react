import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hn_8mfart.css';
import '../../css/k/ki76pdg_q.css';
import '../../css/m/m5yr4o5dt.css';
import '../../css/h/htac12bhz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hn_8mfart"/><path class="ki76pdg_q"/><path class="m5yr4o5dt"/><path class="htac12bhz"/></g>`,
		"fallback": "flag:tr-1x1",
	});
}

export default Component;

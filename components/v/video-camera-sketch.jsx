import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bz-6vcbqb.css';
import '../../css/p/pylfr_bqw.css';
import '../../css/a/axd7xdr2n.css';
import '../../css/w/wmrlzwbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bz-6vcbqb"/><path class="pylfr_bqw wm-a"/><path class="axd7xdr2n wm-k"/><path class="wm-a wmrlzwbhl"/></g>`,
		"fallback": "withicons:video-camera-sketch",
	});
}

export default Component;

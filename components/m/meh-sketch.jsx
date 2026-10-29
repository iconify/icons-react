import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qchn59f8p.css';
import '../../css/n/ns1jfzbcp.css';
import '../../css/q/qrfzbkdib.css';
import '../../css/v/vmlpc7vwr.css';
import '../../css/g/gke91ac6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qchn59f8p"/><path class="ns1jfzbcp wm-k"/><path class="qrfzbkdib wm-k"/><path class="vmlpc7vwr wm-a"/><path class="gke91ac6l wm-a"/></g>`,
		"fallback": "withicons:meh-sketch",
	});
}

export default Component;

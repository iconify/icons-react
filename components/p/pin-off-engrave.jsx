import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bhcoeel6h.css';
import '../../css/o/o2_6hlb3r.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/s/ssoe8jf5k.css';
import '../../css/x/x97f9bb-q.css';
import '../../css/q/q-qnch_8l.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bhcoeel6h wm-k"/><path class="o2_6hlb3r wm-a"/><path class="ol-kpp5cg wm-s"/><path class="ssoe8jf5k wm-shadow"/><path class="wm-k x97f9bb-q"/><path class="q-qnch_8l wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:pin-off-engrave",
	});
}

export default Component;

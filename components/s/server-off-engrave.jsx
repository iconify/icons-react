import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nfsx06xba.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/s/sxlrsnbic.css';
import '../../css/k/kk0onebow.css';
import '../../css/a/aq_2o7bhr.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nfsx06xba wm-k"/><path class="ol-kpp5cg wm-s"/><path class="sxlrsnbic wm-shadow"/><path class="kk0onebow wm-k"/><path class="aq_2o7bhr wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:server-off-engrave",
	});
}

export default Component;

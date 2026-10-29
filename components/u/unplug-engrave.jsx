import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gkj--hbly.css';
import '../../css/o/oq8p5lbka.css';
import '../../css/z/zixvndb2f.css';
import '../../css/v/v-kny3bcm.css';
import '../../css/z/zzdfvdb8o.css';
import '../../css/h/hjbc2qsic.css';
import '../../css/v/v7tmcrk-x.css';
import '../../css/q/q9seatbmp.css';
import '../../css/e/er_76pq8o.css';
import '../../css/v/vgsxhnmjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gkj--hbly wm-k"/><path class="oq8p5lbka wm-a"/><path class="wm-s zixvndb2f"/><path class="v-kny3bcm wm-shadow"/><path class="wm-a zzdfvdb8o"/><path class="hjbc2qsic wm-k"/><path class="v7tmcrk-x wm-a"/><path class="q9seatbmp wm-k"/><path class="er_76pq8o wm-a"/><path class="vgsxhnmjv wm-s"/></g>`,
		"fallback": "withicons:unplug-engrave",
	});
}

export default Component;

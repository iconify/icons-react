import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy6osrbfr.css';
import '../../css/u/u8m4crb_x.css';
import '../../css/g/gcfi240nk.css';
import '../../css/f/fruragbxq.css';
import '../../css/f/fjev1ks2u.css';
import '../../css/s/scnji099d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy6osrbfr"/><path class="u8m4crb_x"/><path class="gcfi240nk"/><path class="fruragbxq"/><path class="fjev1ks2u"/><path class="scnji099d"/>`,
		"fallback": "selfhst:microsoft-entra-id",
	});
}

export default Component;

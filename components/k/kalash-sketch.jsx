import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gdcsdub4h.css';
import '../../css/z/zupry6i0r.css';
import '../../css/s/sy13yh05l.css';
import '../../css/d/d3-dvhb1z.css';
import '../../css/t/t-k6er95i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gdcsdub4h"/><path class="wm-k zupry6i0r"/><path class="sy13yh05l wm-k"/><path class="d3-dvhb1z wm-a"/><path class="t-k6er95i wm-a"/></g>`,
		"fallback": "withicons:kalash-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b55uheb5p.css';
import '../../css/q/qtzm_4i0v.css';
import '../../css/h/hci12cifr.css';
import '../../css/n/nil0an2qe.css';
import '../../css/u/u8a6ddmtq.css';
import '../../css/h/h6_vwvb-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b55uheb5p"/><path class="qtzm_4i0v"/><path class="hci12cifr"/><path class="nil0an2qe"/><path class="u8a6ddmtq"/><path class="h6_vwvb-a"/></g>`,
		"fallback": "fluent-emoji-flat:playground-slide",
	});
}

export default Component;

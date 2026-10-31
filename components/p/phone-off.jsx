import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gqf_qfbox.css';
import '../../css/c/chke1zbgc.css';
import '../../css/v/vdtclzbnl.css';
import '../../css/w/wu0k3nb_b.css';
import '../../css/h/h0ucch20p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gqf_qfbox wm-shadow"/><path class="chke1zbgc wm-shadow"/><path class="vdtclzbnl"/><path class="wu0k3nb_b"/><path class="h0ucch20p wm-s"/></g>`,
		"fallback": "withicons-brutal:phone-off",
	});
}

export default Component;

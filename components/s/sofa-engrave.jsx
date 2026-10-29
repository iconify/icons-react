import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xd4aimb_j.css';
import '../../css/n/n6z362bnb.css';
import '../../css/s/sxuvjhbsh.css';
import '../../css/g/gybz7ebzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xd4aimb_j"/><path class="n6z362bnb wm-shadow"/><path class="sxuvjhbsh"/><path class="gybz7ebzj"/></g>`,
		"fallback": "withicons:sofa-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3_kl7req.css';
import '../../css/v/vgl2subiy.css';
import '../../css/u/uvog564va.css';
import '../../css/y/ykc6yv3ga.css';
import '../../css/d/de1npwusp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o3_kl7req wm-k"/><path class="vgl2subiy wm-a"/><path class="uvog564va wm-shadow"/><path class="wm-k ykc6yv3ga"/><path class="de1npwusp wm-a"/></g>`,
		"fallback": "withicons:pin-engrave",
	});
}

export default Component;

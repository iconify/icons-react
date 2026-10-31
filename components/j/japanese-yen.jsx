import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/kfbs8db4f.css';
import '../../css/g/g4vam_ble.css';
import '../../css/s/sbmtu5bda.css';
import '../../css/k/kh8ertbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGModhGeLT" x1="10" x2="14" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="kfbs8db4f wm-k"/><path class="g4vam_ble wm-deco"/><path fill="url(#SVGModhGeLT)" class="sbmtu5bda wm-k"/><path class="kh8ertbfq wm-shadow"/></g>`,
		"fallback": "withicons-valentine:japanese-yen",
	});
}

export default Component;

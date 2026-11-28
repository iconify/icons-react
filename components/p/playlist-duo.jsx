import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwp2kmbql.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kuz76kwmp.css';
import '../../css/b/bglq8tkkd.css';
import '../../css/s/s9qt71a_b.css';
import '../../css/q/qx1redbwn.css';
import '../../css/u/unoad_hvu.css';
import '../../css/w/w0a7pwb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwp2kmbql secondary"/><g class="dt0cm9dhy primary"><path class="kuz76kwmp"/><path class="bglq8tkkd"/><path class="s9qt71a_b"/><path class="qx1redbwn"/><path class="unoad_hvu"/><path class="w0a7pwb-j"/></g>`,
		"fallback": "iconaut:playlist-duo",
	});
}

export default Component;

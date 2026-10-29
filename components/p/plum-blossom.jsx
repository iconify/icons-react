import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b7kmzz72u.css';
import '../../css/e/ejxsvlepc.css';
import '../../css/t/t0qr32bvg.css';
import '../../css/k/k4b16eb6u.css';
import '../../css/d/dako-m_sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b7kmzz72u wm-k"/><path class="ejxsvlepc wm-a"/><path class="t0qr32bvg wm-s"/><path class="k4b16eb6u"/><path class="dako-m_sn"/></g>`,
		"fallback": "withicons-bauhaus:plum-blossom",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jd1z6xbjn.css';
import '../../css/v/vg3x0nbkd.css';
import '../../css/a/abasntp2y.css';
import '../../css/g/go3ojebxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jd1z6xbjn wm-k"/><path class="vg3x0nbkd wm-shadow"/><path class="abasntp2y wm-k"/><path class="go3ojebxo wm-a"/></g>`,
		"fallback": "withicons:sd-card-engrave",
	});
}

export default Component;

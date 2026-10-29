import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g296x_kvp.css';
import '../../css/k/kfgqakb9z.css';
import '../../css/r/r1jw-m2vv.css';
import '../../css/e/eqaz9db1b.css';
import '../../css/o/ozvu4bk6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g296x_kvp wm-k"/><path class="kfgqakb9z wm-a"/><path class="r1jw-m2vv wm-shadow"/><path class="eqaz9db1b wm-k"/><path class="ozvu4bk6l wm-a"/></g>`,
		"fallback": "withicons:paw-print-engrave",
	});
}

export default Component;

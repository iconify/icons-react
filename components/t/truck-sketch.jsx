import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d_0d8640z.css';
import '../../css/d/dqurycclf.css';
import '../../css/k/kugdbwbuf.css';
import '../../css/u/u77ck3khr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d_0d8640z"/><path class="dqurycclf wm-k"/><path class="kugdbwbuf wm-k"/><path class="u77ck3khr wm-a"/></g>`,
		"fallback": "withicons:truck-sketch",
	});
}

export default Component;

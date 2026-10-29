import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kqeyp4k-t.css';
import '../../css/c/cbqvu9b5z.css';
import '../../css/x/xpmjmd9yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kqeyp4k-t"/><path class="cbqvu9b5z wm-shadow"/><path class="xpmjmd9yr"/></g>`,
		"fallback": "withicons:key-engrave",
	});
}

export default Component;

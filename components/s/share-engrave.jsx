import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lzqo3mlvs.css';
import '../../css/a/a09or3byo.css';
import '../../css/p/p7fropb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lzqo3mlvs"/><path class="a09or3byo wm-shadow"/><path class="p7fropb0k"/></g>`,
		"fallback": "withicons:share-engrave",
	});
}

export default Component;

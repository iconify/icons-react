import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dtuw77bny.css';
import '../../css/a/ak_kr_1qo.css';
import '../../css/n/no_pq6-6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dtuw77bny"/><path class="ak_kr_1qo wm-shadow"/><path class="no_pq6-6s"/></g>`,
		"fallback": "withicons:rewind-engrave",
	});
}

export default Component;

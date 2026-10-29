import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ehzelgb4k.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/m/msqtke50b.css';
import '../../css/z/zzu7z6b8x.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ehzelgb4k wm-k"/><path class="ol-kpp5cg wm-s"/><path class="msqtke50b wm-shadow"/><path class="wm-k zzu7z6b8x"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:star-off-engrave",
	});
}

export default Component;

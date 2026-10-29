import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/je523pkwt.css';
import '../../css/s/s398h1por.css';
import '../../css/p/psnkz2bcb.css';
import '../../css/n/n_bx2obur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="je523pkwt wm-k"/><path class="s398h1por wm-shadow"/><path class="psnkz2bcb wm-k"/><path class="n_bx2obur wm-a"/></g>`,
		"fallback": "withicons:switch-camera-engrave",
	});
}

export default Component;

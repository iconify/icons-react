import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ahwfs1brb.css';
import '../../css/f/f97cc674d.css';
import '../../css/x/xgdz-8_qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ahwfs1brb"/><path class="f97cc674d"/><path class="xgdz-8_qq"/></g>`,
		"fallback": "keyline-icons:music-note-off-two-tone",
	});
}

export default Component;

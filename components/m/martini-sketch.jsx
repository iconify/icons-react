import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ekrd5abyk.css';
import '../../css/i/ihafutcib.css';
import '../../css/g/gp_s3dbvu.css';
import '../../css/t/t7qux-1ws.css';
import '../../css/y/yn2qumbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ekrd5abyk"/><path class="ihafutcib wm-k"/><path class="gp_s3dbvu wm-a"/><path class="t7qux-1ws wm-k"/><path class="wm-a yn2qumbxf"/></g>`,
		"fallback": "withicons:martini-sketch",
	});
}

export default Component;

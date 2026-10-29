import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z56fic-5s.css';
import '../../css/v/vg8lvr9zy.css';
import '../../css/s/smrkqr1kn.css';
import '../../css/g/gapblccgm.css';
import '../../css/d/d-i86qbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z56fic-5s"/><path class="vg8lvr9zy wm-a"/><path class="smrkqr1kn wm-shadow"/><path class="gapblccgm wm-k"/><path class="d-i86qbmd wm-a"/></g>`,
		"fallback": "withicons:sparkles-engrave",
	});
}

export default Component;

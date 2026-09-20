import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvkufybms.css';
import '../../css/s/sb191nbxw.css';
import '../../css/u/uu478ytul.css';
import '../../css/w/wcny-elpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvkufybms"/><circle class="sb191nbxw"/><path class="uu478ytul"/><circle class="wcny-elpt"/></g>`,
		"fallback": "reicon:music-note-sparkle",
	});
}

export default Component;

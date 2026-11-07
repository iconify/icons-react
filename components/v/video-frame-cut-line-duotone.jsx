import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dwa9fqbkg.css';
import '../../css/f/fenutzb3t.css';
import '../../css/m/mtd-u7d6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dwa9fqbkg"/><path class="fenutzb3t"/><path class="mtd-u7d6k"/></g>`,
		"fallback": "solar:video-frame-cut-line-duotone",
	});
}

export default Component;

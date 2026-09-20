import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xtkeuac9p.css';
import '../../css/s/sh1-1pbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xtkeuac9p"/><path class="sh1-1pbmo"/></g>`,
		"fallback": "streamline-sharp-color:one-finger-short-tap",
	});
}

export default Component;

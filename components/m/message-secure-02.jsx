import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mf3vz4bbl.css';
import '../../css/e/e72pf88yi.css';
import '../../css/y/y01ji0mmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mf3vz4bbl"/><path class="e72pf88yi"/><path class="y01ji0mmo"/></g>`,
		"fallback": "hugeicons:message-secure-02",
	});
}

export default Component;

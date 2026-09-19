import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pgwf7peyp.css';
import '../../css/w/wa1i67b-j.css';
import '../../css/k/kyhrmps2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pgwf7peyp"/><path class="wa1i67b-j"/><path class="kyhrmps2k"/></g>`,
		"fallback": "hugeicons:presentation-07",
	});
}

export default Component;

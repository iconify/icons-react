import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gsb-xubkp.css';
import '../../css/z/zgimw8w5b.css';
import '../../css/a/a09g2ehcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gsb-xubkp"/><path class="zgimw8w5b"/><path class="a09g2ehcd"/></g>`,
		"fallback": "solar:round-graph-linear",
	});
}

export default Component;

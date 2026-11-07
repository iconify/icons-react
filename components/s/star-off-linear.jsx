import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fbaecmb8d.css';
import '../../css/t/t25li13br.css';
import '../../css/b/bari53b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fbaecmb8d"/><path class="t25li13br"/><path class="bari53b2u"/></g>`,
		"fallback": "solar:star-off-linear",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d0wxiwb3z.css';
import '../../css/q/qgbomkeqp.css';
import '../../css/f/fml2qzxuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d0wxiwb3z"/><path class="qgbomkeqp"/><path class="fml2qzxuh"/></g>`,
		"fallback": "solar:sort-broken",
	});
}

export default Component;

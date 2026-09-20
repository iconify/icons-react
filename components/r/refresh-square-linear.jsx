import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c7w-5n9ga.css';
import '../../css/s/sm6ozyl_g.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c7w-5n9ga"/><path class="sm6ozyl_g"/><path class="pw8f5c0fp"/></g>`,
		"fallback": "solar:refresh-square-linear",
	});
}

export default Component;

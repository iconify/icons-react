import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/p/pygwz2gtn.css';
import '../../css/e/ee5fpomjx.css';
import '../../css/a/a0n9s38id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="pygwz2gtn"/><path class="ee5fpomjx"/><path class="a0n9s38id"/></g>`,
		"fallback": "solar:password-linear",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/ftmp3lbfo.css';
import '../../css/k/kf130ihje.css';
import '../../css/d/d-_0bsbbx.css';
import '../../css/s/sc93_2j6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ftmp3lbfo"/><path class="kf130ihje"/><path class="d-_0bsbbx"/><path class="sc93_2j6i"/></g>`,
		"fallback": "solar:watch-square-line-duotone",
	});
}

export default Component;

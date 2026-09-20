import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hi7jtrwfv.css';
import '../../css/c/c8s6-ablk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hi7jtrwfv"/><path class="c8s6-ablk"/></g>`,
		"fallback": "keyline-icons:sun-sharp-two-tone",
	});
}

export default Component;

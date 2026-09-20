import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ctqq7w5wd.css';
import '../../css/c/cq5_pabjx.css';
import '../../css/l/lvuxub4vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ctqq7w5wd"/><path class="cq5_pabjx"/><path class="lvuxub4vx"/></g>`,
		"fallback": "streamline-sharp:user-feedback-heart",
	});
}

export default Component;

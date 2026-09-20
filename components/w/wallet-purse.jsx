import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hr79wmn2h.css';
import '../../css/l/l9sh7aboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hr79wmn2h"/><path class="l9sh7aboo"/></g>`,
		"fallback": "streamline-sharp:wallet-purse",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m-tg0dbie.css';
import '../../css/n/nkl72kbds.css';
import '../../css/c/cmp4kzb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m-tg0dbie"/><path class="nkl72kbds"/><path class="cmp4kzb5l"/></g>`,
		"fallback": "streamline-sharp:watch-circle-bluetooth",
	});
}

export default Component;

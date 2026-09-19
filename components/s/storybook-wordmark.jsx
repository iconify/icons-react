import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rj-i8dbss.css';
import '../../css/w/w8x7sqqrp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rj-i8dbss"/><path class="w8x7sqqrp"/></g>`,
		"fallback": "devicon:storybook-wordmark",
	});
}

export default Component;

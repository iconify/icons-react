import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1s6jnf1b.css';
import '../../css/e/elc4ccbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1s6jnf1b"/><path class="elc4ccbci"/></g>`,
		"fallback": "coolicons:settings-duotone-round",
	});
}

export default Component;

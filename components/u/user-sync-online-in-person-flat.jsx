import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mub-e0bwe.css';
import '../../css/m/m504a26ah.css';
import '../../css/h/h4it6t6aq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mub-e0bwe"/><path clip-rule="evenodd" class="m504a26ah"/><path clip-rule="evenodd" class="h4it6t6aq"/></g>`,
		"fallback": "streamline-flex-color:user-sync-online-in-person-flat",
	});
}

export default Component;

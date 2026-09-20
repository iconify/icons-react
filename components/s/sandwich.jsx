import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twwyzac5a.css';
import '../../css/u/u2u1b9bir.css';
import '../../css/g/gwnw5mblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="twwyzac5a"/><path class="u2u1b9bir"/><path class="gwnw5mblv"/></g>`,
		"fallback": "tdesign:sandwich",
	});
}

export default Component;

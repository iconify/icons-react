import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhiju9uso.css';
import '../../css/z/z7lk-nbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhiju9uso"/><path class="z7lk-nbzd"/></g>`,
		"fallback": "coolicons:podcast-duotone-round",
	});
}

export default Component;

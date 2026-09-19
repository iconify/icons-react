import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fh140halc.css';
import '../../css/v/v28u5dbdu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fh140halc"/><path class="v28u5dbdu"/></g>`,
		"fallback": "fluent-emoji-flat:potato",
	});
}

export default Component;

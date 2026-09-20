import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxijq36vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxijq36vr"/>`,
		"fallback": "mdi:toilet-paper-outline",
	});
}

export default Component;

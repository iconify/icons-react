import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbb0ayics.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbb0ayics"/>`,
		"fallback": "vadivam:ruler-dimension-line",
	});
}

export default Component;

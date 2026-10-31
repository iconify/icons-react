import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oznuf_q2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oznuf_q2t"/>`,
		"fallback": "coolicons:owl-fill-round",
	});
}

export default Component;

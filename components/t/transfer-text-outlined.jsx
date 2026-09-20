import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br4wb9f0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br4wb9f0t"/>`,
		"fallback": "weui:transfer-text-outlined",
	});
}

export default Component;

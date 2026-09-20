import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aioi5mbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aioi5mbwe"/>`,
		"fallback": "mdi:shield-tick",
	});
}

export default Component;

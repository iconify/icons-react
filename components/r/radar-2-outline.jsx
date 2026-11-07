import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9h39ibto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9h39ibto"/>`,
		"fallback": "solar:radar-2-outline",
	});
}

export default Component;

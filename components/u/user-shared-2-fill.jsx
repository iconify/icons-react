import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4xl89bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4xl89bml"/>`,
		"fallback": "ri:user-shared-2-fill",
	});
}

export default Component;

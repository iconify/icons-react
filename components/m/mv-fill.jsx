import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eso9agb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eso9agb5s"/>`,
		"fallback": "ri:mv-fill",
	});
}

export default Component;

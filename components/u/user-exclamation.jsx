import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drq0v9xaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drq0v9xaa"/>`,
		"fallback": "sidekickicons:user-exclamation",
	});
}

export default Component;

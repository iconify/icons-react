import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkg4t7ppz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkg4t7ppz"/>`,
		"fallback": "streamline-ultimate:kickstarter-logo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fawgp6okp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fawgp6okp"/>`,
		"fallback": "sidekickicons:photo-plus",
	});
}

export default Component;

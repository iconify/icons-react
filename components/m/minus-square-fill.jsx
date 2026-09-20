import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn_3pob7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn_3pob7z"/>`,
		"fallback": "mage:minus-square-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnnb9e_nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cnnb9e_nb"/>`,
		"fallback": "solar:phone-rounded-outline",
	});
}

export default Component;

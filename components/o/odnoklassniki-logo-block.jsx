import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d77lg5r_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d77lg5r_i"/>`,
		"fallback": "streamline-logos:odnoklassniki-logo-block",
	});
}

export default Component;

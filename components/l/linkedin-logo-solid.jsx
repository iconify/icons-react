import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjb9y5b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zjb9y5b-m"/>`,
		"fallback": "streamline-logos:linkedin-logo-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8p0ejb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v8p0ejb9f"/>`,
		"fallback": "lets-icons:sign-out",
	});
}

export default Component;

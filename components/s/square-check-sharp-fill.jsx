import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1zon-i5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1zon-i5v"/>`,
		"fallback": "keyline-icons:square-check-sharp-fill",
	});
}

export default Component;

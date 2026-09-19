import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1pv4_b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1pv4_b0z"/>`,
		"fallback": "gg:trash-empty",
	});
}

export default Component;

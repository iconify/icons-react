import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8r359d7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8r359d7h"/>`,
		"fallback": "ci:unfold-less",
	});
}

export default Component;

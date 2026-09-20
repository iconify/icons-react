import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckq3cfb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckq3cfb9h"/>`,
		"fallback": "simple-icons:nhl",
	});
}

export default Component;

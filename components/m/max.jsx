import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9qk_6b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9qk_6b9u"/>`,
		"fallback": "cbi:max",
	});
}

export default Component;

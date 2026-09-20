import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5n4c4b6k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5n4c4b6k"/>`,
		"fallback": "selfhst:send-visee-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwedy_b4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwedy_b4e"/>`,
		"fallback": "selfhst:nordpass-dark",
	});
}

export default Component;

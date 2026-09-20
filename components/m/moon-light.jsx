import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqrdo_rwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qqrdo_rwo"/>`,
		"fallback": "stash:moon-light",
	});
}

export default Component;

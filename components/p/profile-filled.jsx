import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uul-3l39q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uul-3l39q"/>`,
		"fallback": "reicon:profile-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbss98bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbss98bve"/>`,
		"fallback": "streamline-sharp:sign-hashtag",
	});
}

export default Component;

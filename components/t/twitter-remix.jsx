import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df5re8b2t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df5re8b2t"/>`,
		"fallback": "streamline:twitter-remix",
	});
}

export default Component;

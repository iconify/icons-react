import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-1joob1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-1joob1l"/>`,
		"fallback": "ix:sound-mute",
	});
}

export default Component;

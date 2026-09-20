import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byy98xbhl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byy98xbhl"/>`,
		"fallback": "radix-icons:speaker-moderate",
	});
}

export default Component;

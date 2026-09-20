import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbk83jwqy.css';
import '../../css/c/cbhrk9bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbk83jwqy"/><path class="cbhrk9bqa"/>`,
		"fallback": "stash:pin-location",
	});
}

export default Component;

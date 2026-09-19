import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af04s8mfk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af04s8mfk"/>`,
		"fallback": "whh:lifeempty",
	});
}

export default Component;

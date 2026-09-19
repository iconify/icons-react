import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6czdubni.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6czdubni"/>`,
		"fallback": "whh:notes",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgxqqcc2c.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgxqqcc2c"/>`,
		"fallback": "whh:livejournal",
	});
}

export default Component;

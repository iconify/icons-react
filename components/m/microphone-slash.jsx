import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7gfoz_0y.css';

const viewBox = {"width":1408,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7gfoz_0y"/>`,
		"fallback": "fa:microphone-slash",
	});
}

export default Component;

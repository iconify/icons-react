import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff7g8uidh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff7g8uidh"/>`,
		"fallback": "fluent-mdl2:robot",
	});
}

export default Component;

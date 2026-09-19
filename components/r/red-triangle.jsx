import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6-4pabmt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6-4pabmt"/>`,
		"fallback": "fluent-emoji-flat:red-triangle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3gj7abse.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3gj7abse"/>`,
		"fallback": "streamline:politics-speech",
	});
}

export default Component;

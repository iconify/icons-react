import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8q-aybpt.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8q-aybpt"/>`,
		"fallback": "wpf:microphone",
	});
}

export default Component;

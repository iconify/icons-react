import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te73lab3u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="te73lab3u"/>`,
		"fallback": "streamline:stethoscope-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4ph5-szq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d4ph5-szq"/>`,
		"fallback": "qlementine-icons:microphone-16",
	});
}

export default Component;

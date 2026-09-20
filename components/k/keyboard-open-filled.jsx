import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t885h7bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t885h7bha"/>`,
		"fallback": "reicon:keyboard-open-filled",
	});
}

export default Component;

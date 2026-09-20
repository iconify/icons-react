import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3q9_5bnz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x3q9_5bnz"/>`,
		"fallback": "streamline-color:wave-signal-flat",
	});
}

export default Component;

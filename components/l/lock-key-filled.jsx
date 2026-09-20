import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmd42x_uk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmd42x_uk"/>`,
		"fallback": "ix:lock-key-filled",
	});
}

export default Component;

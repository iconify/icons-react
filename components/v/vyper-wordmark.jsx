import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idl-9rbla.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idl-9rbla"/>`,
		"fallback": "devicon-plain:vyper-wordmark",
	});
}

export default Component;

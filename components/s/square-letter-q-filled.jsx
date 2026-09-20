import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwk3xhbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwk3xhbde"/>`,
		"fallback": "tabler:square-letter-q-filled",
	});
}

export default Component;

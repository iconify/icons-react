import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctjez13cp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctjez13cp"/>`,
		"fallback": "keyline-icons:link-2-sharp-fill",
	});
}

export default Component;

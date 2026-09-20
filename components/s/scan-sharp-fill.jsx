import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctljy3bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctljy3bzb"/>`,
		"fallback": "keyline-icons:scan-sharp-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmw8ecbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jmw8ecbix"/>`,
		"fallback": "si:projects-fill",
	});
}

export default Component;

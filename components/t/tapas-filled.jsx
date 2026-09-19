import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3mo1ml7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n3mo1ml7y"/>`,
		"fallback": "griddy-icons:tapas-filled",
	});
}

export default Component;

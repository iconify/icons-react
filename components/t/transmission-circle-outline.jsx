import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b71j5xfyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b71j5xfyk"/>`,
		"fallback": "solar:transmission-circle-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol67_6b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ol67_6b1u"/>`,
		"fallback": "token:omi",
	});
}

export default Component;

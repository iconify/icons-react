import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b75xfc_1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b75xfc_1u"/>`,
		"fallback": "reicon:laptop-filled",
	});
}

export default Component;

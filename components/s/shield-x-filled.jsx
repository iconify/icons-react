import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz6c57d1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xz6c57d1i"/>`,
		"fallback": "reicon:shield-x-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmqw1zl_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmqw1zl_u"/>`,
		"fallback": "reicon:smart-speaker3",
	});
}

export default Component;

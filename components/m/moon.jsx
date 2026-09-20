import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxc5fvbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sxc5fvbrx"/>`,
		"fallback": "reicon:moon",
	});
}

export default Component;

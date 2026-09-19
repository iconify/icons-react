import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_og5fbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_og5fbis"/>`,
		"fallback": "bxs:shield-alt-2",
	});
}

export default Component;

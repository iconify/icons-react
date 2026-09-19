import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go9r8we_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go9r8we_w"/>`,
		"fallback": "bxs:plane-alt",
	});
}

export default Component;

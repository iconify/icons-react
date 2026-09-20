import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt95cub8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kt95cub8s"/>`,
		"fallback": "reicon:soundwave-circle",
	});
}

export default Component;

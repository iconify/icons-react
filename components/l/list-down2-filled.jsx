import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm1w6yb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vm1w6yb0p"/>`,
		"fallback": "reicon:list-down2-filled",
	});
}

export default Component;

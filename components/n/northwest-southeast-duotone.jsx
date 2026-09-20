import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxmaacp6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxmaacp6o"/>`,
		"fallback": "si:northwest-southeast-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epagx4b5c.css';
import '../../css/o/odq3bckdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epagx4b5c"/><path class="odq3bckdb"/>`,
		"fallback": "prime:power-off",
	});
}

export default Component;

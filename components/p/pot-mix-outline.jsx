import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caawrpbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caawrpbfd"/>`,
		"fallback": "mdi:pot-mix-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw4wzobeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uw4wzobeh"/>`,
		"fallback": "si:lock-muted-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng2ie-b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng2ie-b-d"/>`,
		"fallback": "si:left-two-headed-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrhp-e1vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrhp-e1vc"/>`,
		"fallback": "mynaui:option",
	});
}

export default Component;

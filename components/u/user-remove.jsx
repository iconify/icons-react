import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2n-wubrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2n-wubrt"/>`,
		"fallback": "ci:user-remove",
	});
}

export default Component;

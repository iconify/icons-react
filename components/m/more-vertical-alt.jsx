import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovae7zbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovae7zbmd"/>`,
		"fallback": "gg:more-vertical-alt",
	});
}

export default Component;

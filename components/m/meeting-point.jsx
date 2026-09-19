import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eacdilb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eacdilb9n"/>`,
		"fallback": "guidance:meeting-point",
	});
}

export default Component;

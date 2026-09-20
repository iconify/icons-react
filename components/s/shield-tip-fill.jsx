import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm3y845ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jm3y845ik"/>`,
		"fallback": "si:shield-tip-fill",
	});
}

export default Component;

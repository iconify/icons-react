import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clmzk40qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clmzk40qm"/>`,
		"fallback": "tabler:tools-kitchen",
	});
}

export default Component;

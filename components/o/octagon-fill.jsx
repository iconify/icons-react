import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skeut9b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skeut9b6w"/>`,
		"fallback": "si:octagon-fill",
	});
}

export default Component;

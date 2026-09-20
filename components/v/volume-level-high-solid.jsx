import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue143cbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ue143cbsa"/>`,
		"fallback": "streamline-sharp:volume-level-high-solid",
	});
}

export default Component;

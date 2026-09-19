import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-_r8935p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-_r8935p"/>`,
		"fallback": "boxicons:planet-filled",
	});
}

export default Component;

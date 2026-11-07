import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6bxffbta.css';
import '../../css/l/lh-_3in4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6bxffbta"/><path clip-rule="evenodd" class="lh-_3in4j"/>`,
		"fallback": "solar:text-selection-outline",
	});
}

export default Component;

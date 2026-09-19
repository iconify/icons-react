import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbyvtbbbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbyvtbbbb"/>`,
		"fallback": "healthicons:liver-outline",
	});
}

export default Component;

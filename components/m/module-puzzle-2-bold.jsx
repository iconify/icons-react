import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo6qm9z4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fo6qm9z4j"/>`,
		"fallback": "streamline-ultimate:module-puzzle-2-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqyqn9b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqyqn9b9k"/>`,
		"fallback": "tabler:mushroom",
	});
}

export default Component;

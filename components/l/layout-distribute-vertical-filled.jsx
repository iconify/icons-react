import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2d6209ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2d6209ep"/>`,
		"fallback": "tabler:layout-distribute-vertical-filled",
	});
}

export default Component;

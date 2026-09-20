import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b84sy2bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b84sy2bnj"/>`,
		"fallback": "pixel:pencil-ruler",
	});
}

export default Component;

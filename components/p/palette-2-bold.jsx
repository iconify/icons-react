import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyq-5cc4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dyq-5cc4g"/>`,
		"fallback": "solar:palette-2-bold",
	});
}

export default Component;

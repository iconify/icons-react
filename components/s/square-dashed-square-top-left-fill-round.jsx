import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doc4jkx1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doc4jkx1g"/>`,
		"fallback": "coolicons:square-dashed-square-top-left-fill-round",
	});
}

export default Component;

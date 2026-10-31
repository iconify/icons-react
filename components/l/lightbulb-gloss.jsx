import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik3-pabpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik3-pabpg"/>`,
		"fallback": "withicons:lightbulb-gloss",
	});
}

export default Component;

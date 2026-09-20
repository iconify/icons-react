import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd00cbc6q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd00cbc6q"/>`,
		"fallback": "pinhead:pixel-arrow-bottom-left",
	});
}

export default Component;

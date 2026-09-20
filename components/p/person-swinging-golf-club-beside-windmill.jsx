import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-3huhbtx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-3huhbtx"/>`,
		"fallback": "pinhead:person-swinging-golf-club-beside-windmill",
	});
}

export default Component;

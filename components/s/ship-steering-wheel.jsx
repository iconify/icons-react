import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhmr2ua0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhmr2ua0a"/>`,
		"fallback": "griddy-icons:ship-steering-wheel",
	});
}

export default Component;

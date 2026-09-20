import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3d7irbky.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3d7irbky"/>`,
		"fallback": "pinhead:rounded-diamond-outline",
	});
}

export default Component;

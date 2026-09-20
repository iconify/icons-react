import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgb76abzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgb76abzz"/>`,
		"fallback": "pinhead:three-plus-over-water",
	});
}

export default Component;

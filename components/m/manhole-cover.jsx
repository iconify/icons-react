import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx-9cq0ex.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx-9cq0ex"/>`,
		"fallback": "pinhead:manhole-cover",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd4ui224u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd4ui224u"/>`,
		"fallback": "pinhead:pretzel-with-salt",
	});
}

export default Component;

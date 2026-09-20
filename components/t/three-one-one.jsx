import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8qiyybgf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8qiyybgf"/>`,
		"fallback": "pinhead:three-one-one",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypi9hb3rc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypi9hb3rc"/>`,
		"fallback": "pinhead:neutral-face",
	});
}

export default Component;

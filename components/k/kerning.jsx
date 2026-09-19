import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz5sxybyy.css';

const viewBox = {"width":1025,"height":895};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz5sxybyy"/>`,
		"fallback": "whh:kerning",
	});
}

export default Component;

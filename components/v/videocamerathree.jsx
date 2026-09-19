import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myzwccaqn.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myzwccaqn"/>`,
		"fallback": "whh:videocamerathree",
	});
}

export default Component;

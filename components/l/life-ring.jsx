import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l45a1lbki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l45a1lbki"/>`,
		"fallback": "roentgen:life-ring",
	});
}

export default Component;

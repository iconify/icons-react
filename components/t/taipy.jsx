import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjn7-gbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjn7-gbjt"/>`,
		"fallback": "simple-icons:taipy",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byk0tmp-s.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byk0tmp-s"/>`,
		"fallback": "il:notification",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc2-d7bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc2-d7bda"/>`,
		"fallback": "lucide:table-of-contents",
	});
}

export default Component;

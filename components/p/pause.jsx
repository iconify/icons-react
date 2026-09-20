import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm7jb4b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm7jb4b8g"/>`,
		"fallback": "vadivam:pause",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghyd-h94s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghyd-h94s"/>`,
		"fallback": "mynaui:trending-up-down-solid",
	});
}

export default Component;

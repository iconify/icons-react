import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7s5l2bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7s5l2bgc"/>`,
		"fallback": "mynaui:label-solid",
	});
}

export default Component;

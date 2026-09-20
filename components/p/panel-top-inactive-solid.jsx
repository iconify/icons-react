import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryt2j8s9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryt2j8s9w"/>`,
		"fallback": "mynaui:panel-top-inactive-solid",
	});
}

export default Component;

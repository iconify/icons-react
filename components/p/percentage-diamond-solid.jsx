import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq40t8vnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq40t8vnp"/>`,
		"fallback": "mynaui:percentage-diamond-solid",
	});
}

export default Component;

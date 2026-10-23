import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq1w66ubm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq1w66ubm"/>`,
		"fallback": "vadivam:layout-panel-top",
	});
}

export default Component;

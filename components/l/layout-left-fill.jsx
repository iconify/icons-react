import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2kbp4bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2kbp4bjy"/>`,
		"fallback": "ri:layout-left-fill",
	});
}

export default Component;

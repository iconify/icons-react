import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkgf-aboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkgf-aboc"/>`,
		"fallback": "vadivam:plane-takeoff",
	});
}

export default Component;

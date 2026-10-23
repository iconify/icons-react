import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocgb-bj4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocgb-bj4v"/>`,
		"fallback": "vadivam:plug-2",
	});
}

export default Component;

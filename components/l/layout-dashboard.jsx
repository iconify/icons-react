import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h71f35jbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h71f35jbq"/>`,
		"fallback": "vadivam:layout-dashboard",
	});
}

export default Component;

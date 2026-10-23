import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njo54y4mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njo54y4mh"/>`,
		"fallback": "vadivam:layout-freeform",
	});
}

export default Component;

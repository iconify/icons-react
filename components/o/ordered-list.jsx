import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sef8rzbht.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sef8rzbht"/>`,
		"fallback": "jam:ordered-list",
	});
}

export default Component;

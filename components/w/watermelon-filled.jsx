import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyk415qex.css';
import '../../css/s/sokimzycn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyk415qex"/><path class="sokimzycn"/>`,
		"fallback": "boxicons:watermelon-filled",
	});
}

export default Component;

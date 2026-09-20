import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyz0sxbtx.css';
import '../../css/g/g773-itfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyz0sxbtx"/><path class="g773-itfn"/>`,
		"fallback": "solar:iphone-bold-duotone",
	});
}

export default Component;

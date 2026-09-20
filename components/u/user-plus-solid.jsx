import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj3a1wbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj3a1wbdk"/>`,
		"fallback": "pixel:user-plus-solid",
	});
}

export default Component;

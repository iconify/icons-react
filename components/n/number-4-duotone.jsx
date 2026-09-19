import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efp94xw4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efp94xw4n"/>`,
		"fallback": "iconamoon:number-4-duotone",
	});
}

export default Component;

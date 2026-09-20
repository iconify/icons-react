import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr5t35m0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr5t35m0c"/>`,
		"fallback": "tabler:number-7-small",
	});
}

export default Component;

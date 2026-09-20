import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amz3848vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amz3848vc"/>`,
		"fallback": "thesvg-color:koc",
	});
}

export default Component;

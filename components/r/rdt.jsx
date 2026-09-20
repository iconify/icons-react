import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/risd38b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="risd38b3c"/>`,
		"fallback": "token:rdt",
	});
}

export default Component;

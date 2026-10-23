import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le9ouvbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le9ouvbib"/>`,
		"fallback": "vadivam:message-square-warning",
	});
}

export default Component;

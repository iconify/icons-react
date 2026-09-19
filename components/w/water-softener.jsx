import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwmwiq9vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwmwiq9vh"/>`,
		"fallback": "cbi:water-softener",
	});
}

export default Component;

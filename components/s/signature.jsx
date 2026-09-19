import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pedwd1-dd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pedwd1-dd"/>`,
		"fallback": "f7:signature",
	});
}

export default Component;

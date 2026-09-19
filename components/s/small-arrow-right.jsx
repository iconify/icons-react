import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_07bhb6l.css';

const viewBox = {"width":210,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_07bhb6l"/>`,
		"fallback": "il:small-arrow-right",
	});
}

export default Component;

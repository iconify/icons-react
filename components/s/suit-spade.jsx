import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmr2z5nok.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmr2z5nok"/>`,
		"fallback": "f7:suit-spade",
	});
}

export default Component;

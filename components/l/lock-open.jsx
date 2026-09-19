import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5pd71w6l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5pd71w6l"/>`,
		"fallback": "f7:lock-open",
	});
}

export default Component;

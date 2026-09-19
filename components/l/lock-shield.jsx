import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unhyvr91n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unhyvr91n"/>`,
		"fallback": "f7:lock-shield",
	});
}

export default Component;

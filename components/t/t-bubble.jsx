import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipfks6n4k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipfks6n4k"/>`,
		"fallback": "f7:t-bubble",
	});
}

export default Component;

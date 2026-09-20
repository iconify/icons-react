import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il39xh8sk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il39xh8sk"/>`,
		"fallback": "radix-icons:link-break-2",
	});
}

export default Component;

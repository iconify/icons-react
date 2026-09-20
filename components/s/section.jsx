import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6a5dms5b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6a5dms5b"/>`,
		"fallback": "radix-icons:section",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwxg69k_l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwxg69k_l"/>`,
		"fallback": "radix-icons:switch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brq57i90w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brq57i90w"/>`,
		"fallback": "radix-icons:letter-case-lowercase",
	});
}

export default Component;

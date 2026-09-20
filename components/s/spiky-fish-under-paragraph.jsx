import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_rqqg3ll.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_rqqg3ll"/>`,
		"fallback": "pinhead:spiky-fish-under-paragraph",
	});
}

export default Component;

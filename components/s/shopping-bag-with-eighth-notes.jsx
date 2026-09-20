import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd4v7obem.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd4v7obem"/>`,
		"fallback": "pinhead:shopping-bag-with-eighth-notes",
	});
}

export default Component;

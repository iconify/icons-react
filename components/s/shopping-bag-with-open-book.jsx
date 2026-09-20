import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-bmdtxyd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-bmdtxyd"/>`,
		"fallback": "pinhead:shopping-bag-with-open-book",
	});
}

export default Component;

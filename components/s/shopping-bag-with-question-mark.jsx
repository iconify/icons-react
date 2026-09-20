import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoqu9nb0t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoqu9nb0t"/>`,
		"fallback": "pinhead:shopping-bag-with-question-mark",
	});
}

export default Component;

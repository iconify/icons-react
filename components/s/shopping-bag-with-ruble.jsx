import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tewnblb5e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tewnblb5e"/>`,
		"fallback": "pinhead:shopping-bag-with-ruble",
	});
}

export default Component;

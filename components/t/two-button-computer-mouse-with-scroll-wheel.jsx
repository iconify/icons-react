import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7o009b2u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7o009b2u"/>`,
		"fallback": "pinhead:two-button-computer-mouse-with-scroll-wheel",
	});
}

export default Component;

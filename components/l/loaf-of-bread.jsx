import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq3zjyb5g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq3zjyb5g"/>`,
		"fallback": "pinhead:loaf-of-bread",
	});
}

export default Component;

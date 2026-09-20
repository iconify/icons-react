import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtekpbcxt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtekpbcxt"/>`,
		"fallback": "pinhead:person-holding-open-book-profile",
	});
}

export default Component;

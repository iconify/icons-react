import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v76j5s1uj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v76j5s1uj"/>`,
		"fallback": "pinhead:pin-pad-with-ruble",
	});
}

export default Component;

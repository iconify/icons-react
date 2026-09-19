import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-a1slwrw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-a1slwrw"/>`,
		"fallback": "ps:store",
	});
}

export default Component;

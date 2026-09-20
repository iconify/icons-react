import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9yiddczm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9yiddczm"/>`,
		"fallback": "uil:mobey-bill-slash",
	});
}

export default Component;

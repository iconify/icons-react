import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prwr0bcqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prwr0bcqi"/>`,
		"fallback": "keyline-icons:list-plus-sharp",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl3x99q7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl3x99q7y"/>`,
		"fallback": "ion:remove-sharp",
	});
}

export default Component;

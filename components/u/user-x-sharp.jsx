import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bic-v3g4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bic-v3g4c"/>`,
		"fallback": "keyline-icons:user-x-sharp",
	});
}

export default Component;

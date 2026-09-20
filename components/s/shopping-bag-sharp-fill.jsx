import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i05wloydx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i05wloydx"/>`,
		"fallback": "keyline-icons:shopping-bag-sharp-fill",
	});
}

export default Component;

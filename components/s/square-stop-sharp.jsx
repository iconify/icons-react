import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5b76tsta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5b76tsta"/>`,
		"fallback": "keyline-icons:square-stop-sharp",
	});
}

export default Component;

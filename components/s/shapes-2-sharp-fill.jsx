import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4nuqs5iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4nuqs5iq"/>`,
		"fallback": "keyline-icons:shapes-2-sharp-fill",
	});
}

export default Component;

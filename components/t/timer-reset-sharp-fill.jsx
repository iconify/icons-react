import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwo2hmvsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwo2hmvsw"/>`,
		"fallback": "keyline-icons:timer-reset-sharp-fill",
	});
}

export default Component;

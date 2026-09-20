import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdk9i9par.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdk9i9par"/>`,
		"fallback": "reicon:maximize-filled",
	});
}

export default Component;

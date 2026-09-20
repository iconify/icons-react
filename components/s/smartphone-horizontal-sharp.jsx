import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rusgjrbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rusgjrbal"/>`,
		"fallback": "keyline-icons:smartphone-horizontal-sharp",
	});
}

export default Component;

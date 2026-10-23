import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feq7f-21y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feq7f-21y"/>`,
		"fallback": "vadivam:user-round-key",
	});
}

export default Component;

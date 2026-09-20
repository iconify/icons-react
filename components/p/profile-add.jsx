import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4t6dmbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4t6dmbdi"/>`,
		"fallback": "reicon:profile-add",
	});
}

export default Component;

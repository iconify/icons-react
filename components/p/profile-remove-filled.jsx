import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la38wybmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la38wybmj"/>`,
		"fallback": "reicon:profile-remove-filled",
	});
}

export default Component;

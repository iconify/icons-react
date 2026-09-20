import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs9t9mcah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs9t9mcah"/>`,
		"fallback": "reicon:profile-delete",
	});
}

export default Component;

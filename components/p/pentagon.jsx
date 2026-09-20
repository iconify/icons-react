import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br11ttb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br11ttb2b"/>`,
		"fallback": "uim:pentagon",
	});
}

export default Component;

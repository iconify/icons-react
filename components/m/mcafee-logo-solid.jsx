import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf9oesbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xf9oesbme"/>`,
		"fallback": "streamline-logos:mcafee-logo-solid",
	});
}

export default Component;

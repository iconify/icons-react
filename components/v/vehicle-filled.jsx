import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejbswtb9o.css';
import '../../css/d/dkt4s1bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejbswtb9o"/><path class="dkt4s1bma"/>`,
		"fallback": "tdesign:vehicle-filled",
	});
}

export default Component;

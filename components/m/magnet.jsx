import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqrk28aif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqrk28aif"/>`,
		"fallback": "boxicons:magnet",
	});
}

export default Component;

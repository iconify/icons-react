import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8r0uwadz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8r0uwadz"/>`,
		"fallback": "streamline-ultimate:insurance-hand",
	});
}

export default Component;

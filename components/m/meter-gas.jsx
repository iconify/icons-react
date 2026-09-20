import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3q3ev6-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3q3ev6-g"/>`,
		"fallback": "mdi:meter-gas",
	});
}

export default Component;

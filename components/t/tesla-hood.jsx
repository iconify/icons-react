import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzshn-b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzshn-b3s"/>`,
		"fallback": "cbi:tesla-hood",
	});
}

export default Component;

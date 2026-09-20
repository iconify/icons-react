import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iytak3z-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iytak3z-s"/>`,
		"fallback": "uil:smile-dizzy",
	});
}

export default Component;

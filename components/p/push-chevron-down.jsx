import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gny9m6b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gny9m6b1s"/>`,
		"fallback": "gg:push-chevron-down",
	});
}

export default Component;

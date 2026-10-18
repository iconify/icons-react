import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xun-pbiej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xun-pbiej"/>`,
		"fallback": "vadivam:sparkle",
	});
}

export default Component;

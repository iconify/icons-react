import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojg7gdc0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojg7gdc0s"/>`,
		"fallback": "uil:skype",
	});
}

export default Component;

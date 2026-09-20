import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9ga-2bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9ga-2bac"/>`,
		"fallback": "vadivam:mouse-pointer",
	});
}

export default Component;

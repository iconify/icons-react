import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku-h9g-aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku-h9g-aq"/>`,
		"fallback": "uil:temperature-half",
	});
}

export default Component;

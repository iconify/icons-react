import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4tu3wkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov4tu3wkh"/>`,
		"fallback": "lucide:octagon",
	});
}

export default Component;

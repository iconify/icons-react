import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyd3jmrsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyd3jmrsj"/>`,
		"fallback": "lucide:roller-coaster",
	});
}

export default Component;

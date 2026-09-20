import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osg8puemb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osg8puemb"/>`,
		"fallback": "mingcute:sleep-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nr3vuui2s.css';
import '../../css/w/wjw7abr5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="nr3vuui2s"/><path class="wjw7abr5y"/></g>`,
		"fallback": "lets-icons:news-light",
	});
}

export default Component;

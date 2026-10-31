import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh27scxld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh27scxld"/>`,
		"fallback": "coolicons:pencil-line-alt-round",
	});
}

export default Component;

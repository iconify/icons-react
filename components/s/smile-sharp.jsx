import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqe88najq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqe88najq"/>`,
		"fallback": "pixelarticons:smile-sharp",
	});
}

export default Component;

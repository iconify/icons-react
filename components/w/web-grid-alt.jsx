import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhg7x8ycq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhg7x8ycq"/>`,
		"fallback": "uit:web-grid-alt",
	});
}

export default Component;

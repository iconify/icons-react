import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh3_ei7nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh3_ei7nq"/>`,
		"fallback": "lets-icons:move-light",
	});
}

export default Component;

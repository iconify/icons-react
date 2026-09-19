import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvatpob0r.css';
import '../../css/g/g9wb33bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvatpob0r"/><path class="g9wb33bax"/>`,
		"fallback": "boxicons:layers-minus-alt-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syd3mvaxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syd3mvaxq"/>`,
		"fallback": "eos-icons:system-ok",
	});
}

export default Component;

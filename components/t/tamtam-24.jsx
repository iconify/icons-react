import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp-rp12lq.css';
import '../../css/r/rx12m6nmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp-rp12lq"/><path clip-rule="evenodd" class="rx12m6nmx"/>`,
		"fallback": "qlementine-icons:tamtam-24",
	});
}

export default Component;

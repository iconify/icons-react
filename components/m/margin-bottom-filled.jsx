import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj3p1-bpn.css';
import '../../css/e/exda4zbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj3p1-bpn"/><rect class="exda4zbzi"/>`,
		"fallback": "boxicons:margin-bottom-filled",
	});
}

export default Component;

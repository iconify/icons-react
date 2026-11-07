import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pklythb1b.css';
import '../../css/x/x2jcmsnbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pklythb1b"/><path clip-rule="evenodd" class="x2jcmsnbj"/>`,
		"fallback": "solar:kick-scooter-bold-duotone",
	});
}

export default Component;

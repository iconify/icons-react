import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3-5_c46r.css';
import '../../css/f/fgtzzk1mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3-5_c46r"/><path class="fgtzzk1mv"/>`,
		"fallback": "token:wagmigames",
	});
}

export default Component;

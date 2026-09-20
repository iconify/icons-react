import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjna34s_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjna34s_p"/>`,
		"fallback": "lineicons:medium-alt",
	});
}

export default Component;

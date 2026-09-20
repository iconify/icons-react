import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrv1b1bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrv1b1bij"/>`,
		"fallback": "ri:skip-up-line",
	});
}

export default Component;

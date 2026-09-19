import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6-p3cb7a.css';
import '../../css/s/sxs8wrbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6-p3cb7a duoicon-primary-layer"/><path class="duoicon-secondary-layer sxs8wrbxz"/>`,
		"fallback": "duo-icons:moon-2",
	});
}

export default Component;

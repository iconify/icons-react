import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riq_j0vdh.css';
import '../../css/j/jutyogb6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riq_j0vdh"/><path class="jutyogb6q"/>`,
		"fallback": "selfhst:maildev-dark",
	});
}

export default Component;

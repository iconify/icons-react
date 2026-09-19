import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-61rbjll.css';
import '../../css/l/lo95uel6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="e-61rbjll"/><path class="lo95uel6m"/>`,
		"fallback": "bxs:sushi",
	});
}

export default Component;

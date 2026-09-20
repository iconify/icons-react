import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju64m7nre.css';
import '../../css/g/gm7gmzfit.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju64m7nre"/><path class="gm7gmzfit"/>`,
		"fallback": "lineicons:ticket",
	});
}

export default Component;

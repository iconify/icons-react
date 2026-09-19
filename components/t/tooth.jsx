import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkanzva6g.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkanzva6g"/>`,
		"fallback": "fa-solid:tooth",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2priwbjg.css';
import '../../css/k/k4jeo3qws.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2priwbjg"/><path class="k4jeo3qws"/>`,
		"fallback": "nimbus:invoice",
	});
}

export default Component;

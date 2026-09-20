import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-n2__egq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-n2__egq"/>`,
		"fallback": "oui:token-method",
	});
}

export default Component;

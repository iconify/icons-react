import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0mnjlb-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0mnjlb-f"/>`,
		"fallback": "selfhst:postiz-dark",
	});
}

export default Component;

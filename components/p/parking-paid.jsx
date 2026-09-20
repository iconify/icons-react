import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzn36jbck.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzn36jbck"/>`,
		"fallback": "maki:parking-paid",
	});
}

export default Component;

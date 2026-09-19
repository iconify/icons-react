import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feecu69ub.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feecu69ub"/>`,
		"fallback": "dinkie-icons:otfeature-onum-small-filled",
	});
}

export default Component;

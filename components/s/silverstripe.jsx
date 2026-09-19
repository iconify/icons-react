import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3t2e4m8i.css';

const viewBox = {"width":1026,"height":1022};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3t2e4m8i"/>`,
		"fallback": "whh:silverstripe",
	});
}

export default Component;

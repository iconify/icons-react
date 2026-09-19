import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hye3s26us.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hye3s26us"/>`,
		"fallback": "famicons:male-sharp",
	});
}

export default Component;

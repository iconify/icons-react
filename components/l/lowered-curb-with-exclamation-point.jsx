import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esgoklb7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esgoklb7j"/>`,
		"fallback": "pinhead:lowered-curb-with-exclamation-point",
	});
}

export default Component;

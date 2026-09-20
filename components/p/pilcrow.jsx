import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0fbj7bwv.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x0fbj7bwv"/>`,
		"fallback": "lineicons:pilcrow",
	});
}

export default Component;

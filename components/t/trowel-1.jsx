import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4hkoobwk.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4hkoobwk"/>`,
		"fallback": "lineicons:trowel-1",
	});
}

export default Component;

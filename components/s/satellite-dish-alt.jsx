import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w55ukkbng.css';
import '../../css/v/v14jurb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w55ukkbng"/><path class="v14jurb5k"/>`,
		"fallback": "boxicons:satellite-dish-alt",
	});
}

export default Component;

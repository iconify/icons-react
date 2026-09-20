import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et1pwobxg.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et1pwobxg"/>`,
		"fallback": "lineicons:reply",
	});
}

export default Component;

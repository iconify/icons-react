import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xri8-yvdp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xri8-yvdp"/>`,
		"fallback": "pajamas:question-o",
	});
}

export default Component;

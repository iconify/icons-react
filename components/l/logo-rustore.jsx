import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvjfu_q4n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wvjfu_q4n"/>`,
		"fallback": "gravity-ui:logo-rustore",
	});
}

export default Component;

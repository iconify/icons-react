import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7s5-gbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7s5-gbal"/>`,
		"fallback": "nrk:some-share",
	});
}

export default Component;

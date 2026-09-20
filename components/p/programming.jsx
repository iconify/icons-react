import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0sfi1bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0sfi1bbp"/>`,
		"fallback": "pixel:programming",
	});
}

export default Component;

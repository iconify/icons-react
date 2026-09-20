import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re6-2bchy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re6-2bchy"/>`,
		"fallback": "mdi:road",
	});
}

export default Component;

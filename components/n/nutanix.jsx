import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo8dceitg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo8dceitg"/>`,
		"fallback": "thesvg-color:nutanix",
	});
}

export default Component;

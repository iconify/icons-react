import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xewb970xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xewb970xu"/>`,
		"fallback": "tabler:letter-m-small",
	});
}

export default Component;

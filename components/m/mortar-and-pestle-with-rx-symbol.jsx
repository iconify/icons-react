import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqaqnlb0l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqaqnlb0l"/>`,
		"fallback": "pinhead:mortar-and-pestle-with-rx-symbol",
	});
}

export default Component;

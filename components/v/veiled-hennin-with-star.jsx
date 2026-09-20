import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbsuls3hw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbsuls3hw"/>`,
		"fallback": "pinhead:veiled-hennin-with-star",
	});
}

export default Component;

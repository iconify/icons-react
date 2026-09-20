import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xod2vyb_c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xod2vyb_c"/>`,
		"fallback": "pinhead:maine",
	});
}

export default Component;

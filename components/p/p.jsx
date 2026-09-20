import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dju037ojc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dju037ojc"/>`,
		"fallback": "pinhead:p",
	});
}

export default Component;

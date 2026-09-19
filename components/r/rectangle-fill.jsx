import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lya76wdsg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lya76wdsg"/>`,
		"fallback": "f7:rectangle-fill",
	});
}

export default Component;

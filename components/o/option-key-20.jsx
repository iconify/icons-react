import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inudf1erv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inudf1erv"/>`,
		"fallback": "energy-icons:option-key-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4c_akmqy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4c_akmqy"/>`,
		"fallback": "pinhead:p-wide-with-arrow-bottom-right",
	});
}

export default Component;

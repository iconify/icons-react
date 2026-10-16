import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4-5bmdtc.css';
import '../../css/e/ei-x7jbxk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4-5bmdtc"/><path class="ei-x7jbxk"/>`,
		"fallback": "energy-icons:terraced-house-20-bold",
	});
}

export default Component;

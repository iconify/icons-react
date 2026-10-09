import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whf-7i3fs.css';
import '../../css/d/dqs7t3alo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whf-7i3fs"/><path class="dqs7t3alo"/>`,
		"fallback": "energy-icons:smart-plug-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbpy3zb7d.css';
import '../../css/f/fepfndbxl.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbpy3zb7d"/><path class="fepfndbxl"/>`,
		"fallback": "lineicons:star-half",
	});
}

export default Component;

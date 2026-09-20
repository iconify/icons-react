import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq_wuqm-c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq_wuqm-c"/>`,
		"fallback": "picon:shop",
	});
}

export default Component;

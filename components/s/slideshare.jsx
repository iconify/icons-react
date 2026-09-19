import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv452rm2o.css';

const viewBox = {"width":669,"height":681};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv452rm2o"/>`,
		"fallback": "ls:slideshare",
	});
}

export default Component;

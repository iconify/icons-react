import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sue7ftw_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sue7ftw_k"/>`,
		"fallback": "octicon:move-to-end-24",
	});
}

export default Component;

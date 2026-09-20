import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smhd_bzjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smhd_bzjv"/>`,
		"fallback": "ooui:update-ltr",
	});
}

export default Component;

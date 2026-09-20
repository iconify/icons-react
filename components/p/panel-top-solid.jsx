import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhzu1ybgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhzu1ybgm"/>`,
		"fallback": "mynaui:panel-top-solid",
	});
}

export default Component;

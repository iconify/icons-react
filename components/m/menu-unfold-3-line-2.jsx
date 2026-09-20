import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsu_6q6po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsu_6q6po"/>`,
		"fallback": "ri:menu-unfold-3-line-2",
	});
}

export default Component;

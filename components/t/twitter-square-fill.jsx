import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4vpd_lgo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4vpd_lgo"/>`,
		"fallback": "ant-design:twitter-square-fill",
	});
}

export default Component;

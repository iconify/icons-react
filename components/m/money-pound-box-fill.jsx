import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hao75bc9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hao75bc9m"/>`,
		"fallback": "ri:money-pound-box-fill",
	});
}

export default Component;

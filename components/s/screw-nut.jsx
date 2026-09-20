import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu21_9btv.css';
import '../../css/y/ygivrbbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu21_9btv"/><path class="ygivrbbwf"/>`,
		"fallback": "stash:screw-nut",
	});
}

export default Component;

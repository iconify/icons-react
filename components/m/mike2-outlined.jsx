import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t75_zubnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t75_zubnw"/>`,
		"fallback": "weui:mike2-outlined",
	});
}

export default Component;

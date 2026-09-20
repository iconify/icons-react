import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeaf2n6lm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeaf2n6lm"/>`,
		"fallback": "streamline-ultimate:pregnancy-sperm-1",
	});
}

export default Component;

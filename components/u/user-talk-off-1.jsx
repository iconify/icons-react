import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh2zvbb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh2zvbb9y"/>`,
		"fallback": "tdesign:user-talk-off-1",
	});
}

export default Component;

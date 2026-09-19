import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9naz0aiw.css';
import '../../css/z/zh4vk3tqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9naz0aiw"/><path class="zh4vk3tqd"/>`,
		"fallback": "gcp:security-key-enforcement",
	});
}

export default Component;

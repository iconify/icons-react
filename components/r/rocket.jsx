import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd-0mbc3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd-0mbc3i"/>`,
		"fallback": "vadivam:rocket",
	});
}

export default Component;

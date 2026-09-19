import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-_27iyyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-_27iyyu"/>`,
		"fallback": "heroicons:rss",
	});
}

export default Component;

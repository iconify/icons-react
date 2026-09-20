import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zygr9uula.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zygr9uula"/>`,
		"fallback": "thesvg-color:rss",
	});
}

export default Component;

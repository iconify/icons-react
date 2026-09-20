import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yihbp307b.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yihbp307b"/>`,
		"fallback": "wi:owm-night-621",
	});
}

export default Component;

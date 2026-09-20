import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngkdydb1g.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngkdydb1g"/>`,
		"fallback": "wi:owm-803",
	});
}

export default Component;

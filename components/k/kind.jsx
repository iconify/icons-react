import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4g9cnbqy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4g9cnbqy"/>`,
		"fallback": "pajamas:kind",
	});
}

export default Component;

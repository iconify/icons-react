import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbb__jcbz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbb__jcbz"/>`,
		"fallback": "icomoon-free:shocked",
	});
}

export default Component;

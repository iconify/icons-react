import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_f49x26x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l_f49x26x"/>`,
		"fallback": "lsicon:lightning-filled",
	});
}

export default Component;

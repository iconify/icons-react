import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgu-cdbxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgu-cdbxj"/>`,
		"fallback": "selfhst:keila",
	});
}

export default Component;

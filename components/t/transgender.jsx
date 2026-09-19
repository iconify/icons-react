import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/webnvt7xv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="webnvt7xv"/>`,
		"fallback": "ion:transgender",
	});
}

export default Component;

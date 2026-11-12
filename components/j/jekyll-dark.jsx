import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzg3y5byu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzg3y5byu"/>`,
		"fallback": "selfhst:jekyll-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqzu86jcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqzu86jcm"/>`,
		"fallback": "keyline-icons:shopping-bag-sharp",
	});
}

export default Component;

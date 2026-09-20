import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqws7db-s.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqws7db-s"/>`,
		"fallback": "jam:shopping-bag-alt",
	});
}

export default Component;

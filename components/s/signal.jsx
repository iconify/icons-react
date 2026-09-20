import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjl_jbb4y.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjl_jbb4y"/>`,
		"fallback": "jam:signal",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eznpw-5ql.css';

const viewBox = {"width":898,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eznpw-5ql"/>`,
		"fallback": "whh:nodejs",
	});
}

export default Component;

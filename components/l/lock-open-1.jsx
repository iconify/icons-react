import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li8oa0riw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li8oa0riw"/>`,
		"fallback": "radix-icons:lock-open-1",
	});
}

export default Component;

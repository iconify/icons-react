import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6dn16dyu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6dn16dyu"/>`,
		"fallback": "fa-solid:remove-format",
	});
}

export default Component;

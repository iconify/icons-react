import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q680kxb5n.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q680kxb5n"/>`,
		"fallback": "fa-solid:store-alt",
	});
}

export default Component;

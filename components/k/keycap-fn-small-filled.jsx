import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv6d8pzsj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv6d8pzsj"/>`,
		"fallback": "dinkie-icons:keycap-fn-small-filled",
	});
}

export default Component;

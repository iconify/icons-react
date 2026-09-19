import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmc71fzqn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmc71fzqn"/>`,
		"fallback": "fa-solid:user-alt-slash",
	});
}

export default Component;

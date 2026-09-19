import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adw7mecqg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adw7mecqg"/>`,
		"fallback": "fa-solid:sort-alpha-down-alt",
	});
}

export default Component;

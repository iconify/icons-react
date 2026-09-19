import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9xwewb7q.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9xwewb7q"/>`,
		"fallback": "fa-solid:store-alt-slash",
	});
}

export default Component;

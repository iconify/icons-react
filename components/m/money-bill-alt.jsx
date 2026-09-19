import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku4oheb7d.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku4oheb7d"/>`,
		"fallback": "fa-solid:money-bill-alt",
	});
}

export default Component;

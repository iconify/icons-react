import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpfqjdgxd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpfqjdgxd"/>`,
		"fallback": "radix-icons:view-horizontal",
	});
}

export default Component;

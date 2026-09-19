import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xha8meb5n.css';
import '../../css/o/owtzvwbos.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xha8meb5n"/><path class="owtzvwbos"/>`,
		"fallback": "carbon:plane-private",
	});
}

export default Component;

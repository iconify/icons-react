import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6rueab4y.css';
import '../../css/k/kcx9ch0qs.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6rueab4y"/><path class="kcx9ch0qs"/>`,
		"fallback": "tabler-flags:ukraine",
	});
}

export default Component;

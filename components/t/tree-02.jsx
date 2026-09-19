import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvm3z5b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvm3z5b0p"/>`,
		"fallback": "hugeicons:tree-02",
	});
}

export default Component;

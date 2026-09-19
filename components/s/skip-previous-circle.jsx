import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-oj-cj7f.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-oj-cj7f"/><path class="bwibdw4bb"/>`,
		"fallback": "boxicons:skip-previous-circle",
	});
}

export default Component;

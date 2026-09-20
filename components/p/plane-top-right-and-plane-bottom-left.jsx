import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6_kpfbyj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6_kpfbyj"/>`,
		"fallback": "pinhead:plane-top-right-and-plane-bottom-left",
	});
}

export default Component;

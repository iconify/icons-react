import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag91xjrra.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag91xjrra"/>`,
		"fallback": "fa-solid:level-down-alt",
	});
}

export default Component;

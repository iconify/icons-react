import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kid_kqb5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kid_kqb5n"/>`,
		"fallback": "fa6-solid:table-cells-large",
	});
}

export default Component;

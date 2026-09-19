import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj_gb8-5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj_gb8-5q"/>`,
		"fallback": "fa6-solid:table-cells",
	});
}

export default Component;

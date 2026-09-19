import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q__oynb4t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q__oynb4t"/>`,
		"fallback": "fa7-solid:table-cells-row-unlock",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m7se3rbus.css';
import '../../css/k/knjz4ccdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m7se3rbus"/><path class="knjz4ccdd"/></g>`,
		"fallback": "hugeicons:layout-table-01",
	});
}

export default Component;

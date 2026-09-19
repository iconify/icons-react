import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h8fe7ix4o.css';
import '../../css/b/bbpve-yut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h8fe7ix4o"/><circle class="bbpve-yut"/></g>`,
		"fallback": "hugeicons:user-add-01",
	});
}

export default Component;

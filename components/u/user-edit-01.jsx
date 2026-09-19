import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbpve-yut.css';
import '../../css/y/y1kc1jb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="bbpve-yut"/><path class="y1kc1jb1q"/></g>`,
		"fallback": "hugeicons:user-edit-01",
	});
}

export default Component;

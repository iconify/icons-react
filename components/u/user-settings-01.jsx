import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aeqle0b7q.css';
import '../../css/b/bbpve-yut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aeqle0b7q"/><circle class="bbpve-yut"/></g>`,
		"fallback": "hugeicons:user-settings-01",
	});
}

export default Component;

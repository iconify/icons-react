import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zp0j2whzz.css';
import '../../css/n/nzks4w00p.css';
import '../../css/o/oqgz1ccyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zp0j2whzz"/><path class="nzks4w00p"/><path class="oqgz1ccyn"/></g>`,
		"fallback": "hugeicons:money-remove-02",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi0h12b3d.css';
import '../../css/t/t-po0jxhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vi0h12b3d"/><path class="t-po0jxhx"/></g>`,
		"fallback": "andrsrxn:panels-start",
	});
}

export default Component;

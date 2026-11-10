import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-c3zgbzp.css';
import '../../css/o/ok_s3tb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-c3zgbzp"/><path class="ok_s3tb_z"/></g>`,
		"fallback": "andrsrxn:table-cells-split",
	});
}

export default Component;

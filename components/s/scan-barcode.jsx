import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/to3xyob_v.css';
import '../../css/g/ghh988dai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="to3xyob_v"/><path class="ghh988dai"/></g>`,
		"fallback": "andrsrxn:scan-barcode",
	});
}

export default Component;

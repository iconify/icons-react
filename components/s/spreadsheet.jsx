import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_p8vvblx.css';
import '../../css/x/xeykeqb2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_p8vvblx"/><path class="xeykeqb2d"/>`,
		"fallback": "cil:spreadsheet",
	});
}

export default Component;

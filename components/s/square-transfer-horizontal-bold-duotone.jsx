import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edf2mabxb.css';
import '../../css/y/ybgbmbbwp.css';
import '../../css/z/zty6cw7zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edf2mabxb"/><path class="ybgbmbbwp"/><path class="zty6cw7zo"/>`,
		"fallback": "solar:square-transfer-horizontal-bold-duotone",
	});
}

export default Component;

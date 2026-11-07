import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di081o1ve.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/x_5vmjivq.css';
import '../../css/m/mx38t0sgx.css';
import '../../css/a/ab65tvput.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di081o1ve"/><g class="xtpeb-edw"><path class="x_5vmjivq"/><path class="mx38t0sgx"/><path class="ab65tvput"/></g>`,
		"fallback": "solar:star-rainbow-bold-duotone",
	});
}

export default Component;

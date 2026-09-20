import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxp3iactp.css';
import '../../css/h/hy2z1dbou.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxp3iactp"/><path class="hy2z1dbou"/>`,
		"fallback": "lineicons:popup",
	});
}

export default Component;

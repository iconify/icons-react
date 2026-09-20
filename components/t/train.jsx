import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzo_s6m5m.css';
import '../../css/m/mfabyo3pw.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzo_s6m5m"/><path class="mfabyo3pw"/>`,
		"fallback": "lineicons:train",
	});
}

export default Component;

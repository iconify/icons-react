import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm1rnhb5b.css';
import '../../css/q/qrszpl-4t.css';
import '../../css/g/g0ukppbir.css';
import '../../css/x/xo2tenbed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm1rnhb5b"/><path class="qrszpl-4t"/><path class="g0ukppbir"/><path class="xo2tenbed"/>`,
		"fallback": "energy-icons:screen-rotate-48",
	});
}

export default Component;

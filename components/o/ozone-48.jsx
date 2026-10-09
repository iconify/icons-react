import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k25wbcbbf.css';
import '../../css/x/x2ixy0bli.css';
import '../../css/t/tgh03o3xt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k25wbcbbf"/><path class="x2ixy0bli"/><path class="tgh03o3xt"/>`,
		"fallback": "energy-icons:ozone-48",
	});
}

export default Component;

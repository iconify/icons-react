import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir3jylx1q.css';
import '../../css/a/ayhad1bui.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ir3jylx1q"/><path class="ayhad1bui clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:uninstall-line",
	});
}

export default Component;

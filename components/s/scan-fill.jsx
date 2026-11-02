import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsu69y5bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsu69y5bp"/>`,
		"fallback": "mingcute:scan-fill",
	});
}

export default Component;

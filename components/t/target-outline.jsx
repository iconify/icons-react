import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0cqj4bnv.css';
import '../../css/q/qmhcqtbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0cqj4bnv"/><path clip-rule="evenodd" class="qmhcqtbvx"/>`,
		"fallback": "solar:target-outline",
	});
}

export default Component;

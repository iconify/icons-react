import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qphgtx_0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qphgtx_0r"/>`,
		"fallback": "tabler:scuba-mask-off",
	});
}

export default Component;

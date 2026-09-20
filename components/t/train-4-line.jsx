import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0o91oa8d.css';
import '../../css/n/nzums1brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0o91oa8d"/><path class="nzums1brs"/>`,
		"fallback": "mingcute:train-4-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/m/ms1nvcc_y.css';
import '../../css/r/r6uxodbam.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="ms1nvcc_y"/><path class="r6uxodbam"/></g>`,
		"fallback": "streamline-color:key",
	});
}

export default Component;

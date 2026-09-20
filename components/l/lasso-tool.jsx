import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/l/liqqu6bfh.css';
import '../../css/g/gj-cq-bni.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="liqqu6bfh"/><path class="gj-cq-bni"/></g>`,
		"fallback": "streamline-color:lasso-tool",
	});
}

export default Component;

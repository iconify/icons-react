import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/sqzlrabeh.css';
import '../../css/u/ulo30bb1e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="sqzlrabeh"/><path class="ulo30bb1e"/></g>`,
		"fallback": "streamline-flex-color:rotate-left",
	});
}

export default Component;

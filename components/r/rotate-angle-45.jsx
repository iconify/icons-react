import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/z/zgvi69bqw.css';
import '../../css/l/lhg8gtbzi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="zgvi69bqw"/><path class="lhg8gtbzi"/></g>`,
		"fallback": "streamline-color:rotate-angle-45",
	});
}

export default Component;

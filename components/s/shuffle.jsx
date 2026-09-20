import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/j/j2dnirfja.css';
import '../../css/i/if7n55bna.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="j2dnirfja"/><path class="if7n55bna"/></g>`,
		"fallback": "streamline-flex-color:shuffle",
	});
}

export default Component;

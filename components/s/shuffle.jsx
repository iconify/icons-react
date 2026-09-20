import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/n/n_8vkzsqx.css';
import '../../css/h/h2d4w9b-e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="n_8vkzsqx"/><path class="h2d4w9b-e"/></g>`,
		"fallback": "streamline-color:shuffle",
	});
}

export default Component;

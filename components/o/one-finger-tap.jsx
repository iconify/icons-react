import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/ra4b4ci9q.css';
import '../../css/x/xjz-8_b5k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ra4b4ci9q"/><path class="xjz-8_b5k"/></g>`,
		"fallback": "streamline-plump:one-finger-tap",
	});
}

export default Component;

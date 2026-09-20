import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wjwunyqio.css';
import '../../css/h/hvwfll0ah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path clip-rule="evenodd" class="wjwunyqio"/><path class="hvwfll0ah"/></g>`,
		"fallback": "streamline-plump:magnet",
	});
}

export default Component;

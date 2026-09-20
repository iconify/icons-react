import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lavh340ja.css';
import '../../css/v/v6d5xqugh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="lavh340ja"/><path class="v6d5xqugh"/></g>`,
		"fallback": "streamline-plump:traffic-light",
	});
}

export default Component;

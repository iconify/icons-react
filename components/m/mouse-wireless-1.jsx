import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/bfk3jubkp.css';
import '../../css/m/m6he4ac8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="bfk3jubkp"/><path class="m6he4ac8i"/></g>`,
		"fallback": "streamline-plump:mouse-wireless-1",
	});
}

export default Component;

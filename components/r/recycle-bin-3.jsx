import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qqri5hbat.css';
import '../../css/j/ju9aqjm6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qqri5hbat"/><path class="ju9aqjm6y"/></g>`,
		"fallback": "streamline-plump:recycle-bin-3",
	});
}

export default Component;

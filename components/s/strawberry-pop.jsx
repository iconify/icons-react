import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/q/q76csc03j.css';
import '../../css/y/yhw67ybmq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="q76csc03j"/><path class="yhw67ybmq"/></g>`,
		"fallback": "streamline-kameleon-color:strawberry-pop",
	});
}

export default Component;

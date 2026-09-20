import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uvyzzzbel.css';
import '../../css/p/pt40p0bcy.css';
import '../../css/v/vc8vlgbbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="uvyzzzbel"/><path class="pt40p0bcy"/><path class="vc8vlgbbc"/></g>`,
		"fallback": "streamline-plump:user-multiple-accounts",
	});
}

export default Component;

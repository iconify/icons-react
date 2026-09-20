import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/n-ifm8t5g.css';
import '../../css/m/m8z4rzyti.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="n-ifm8t5g"/><path class="m8z4rzyti"/></g>`,
		"fallback": "streamline-plump:layer-mask",
	});
}

export default Component;

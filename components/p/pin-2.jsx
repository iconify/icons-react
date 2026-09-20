import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zjaml793l.css';
import '../../css/p/pv851s9pl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="zjaml793l"/><path class="pv851s9pl"/></g>`,
		"fallback": "streamline-plump:pin-2",
	});
}

export default Component;

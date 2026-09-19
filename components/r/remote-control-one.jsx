import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phqj96tym.css';
import '../../css/j/ji09qr2cx.css';
import '../../css/w/wv7su1lfa.css';
import '../../css/q/qtqbarb1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phqj96tym"/><path class="ji09qr2cx"/><circle class="wv7su1lfa"/><circle class="qtqbarb1h"/></g>`,
		"fallback": "icon-park-solid:remote-control-one",
	});
}

export default Component;

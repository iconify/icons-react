import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ogob_bbak.css';
import '../../css/p/pzynipayd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ogob_bbak"/><path class="pzynipayd"/></g>`,
		"fallback": "streamline-plump:magic-wand-1",
	});
}

export default Component;

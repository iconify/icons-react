import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/feuq6o2hw.css';
import '../../css/a/a19bgfcuu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="feuq6o2hw"/><path class="a19bgfcuu"/></g>`,
		"fallback": "streamline-plump:treasure-chest",
	});
}

export default Component;

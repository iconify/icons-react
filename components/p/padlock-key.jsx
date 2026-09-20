import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/n_18r0b7a.css';
import '../../css/j/jmnziigtk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="n_18r0b7a"/><path class="jmnziigtk"/></g>`,
		"fallback": "streamline-plump:padlock-key",
	});
}

export default Component;

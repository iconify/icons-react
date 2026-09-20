import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grsdwcb5x.css';
import '../../css/q/qoelw1bek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="grsdwcb5x"/><path class="qoelw1bek"/></g>`,
		"fallback": "streamline-plump-color:select-all-flat",
	});
}

export default Component;

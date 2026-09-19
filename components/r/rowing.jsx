import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/i/iwk23h8tf.css';
import '../../css/j/jkcu7kbhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="iwk23h8tf"/><path class="jkcu7kbhq"/></g>`,
		"fallback": "icon-park-outline:rowing",
	});
}

export default Component;

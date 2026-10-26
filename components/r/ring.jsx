import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iom06ubvw.css';
import '../../css/h/hocchnbix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="iom06ubvw"/><path class="hocchnbix"/></g>`,
		"fallback": "doodle-icons:ring",
	});
}

export default Component;

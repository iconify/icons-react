import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/itl7zlb3o.css';
import '../../css/f/frgqcub5h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="itl7zlb3o"/><path class="frgqcub5h"/></g>`,
		"fallback": "doodle-icons:tulip",
	});
}

export default Component;

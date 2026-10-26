import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/k/kuq9g7qyd.css';
import '../../css/t/t7qlulbnp.css';
import '../../css/q/q62z8r9fo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="kuq9g7qyd"/><path class="t7qlulbnp"/><path class="q62z8r9fo"/></g>`,
		"fallback": "doodle-icons:rabbit",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/litft91pl.css';
import '../../css/l/lf1g4p6ze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="litft91pl"/><path class="lf1g4p6ze"/></g>`,
		"fallback": "doodle-icons:smile",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uws2gcfef.css';
import '../../css/n/n82p4-bjz.css';
import '../../css/s/smv74pb2k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="uws2gcfef"/><path class="n82p4-bjz"/><path class="smv74pb2k"/></g>`,
		"fallback": "doodle-icons:potted-plant",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/tnb7-1bnq.css';
import '../../css/m/m4nqbyncy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="tnb7-1bnq"/><path class="m4nqbyncy"/></g>`,
		"fallback": "doodle-icons:mic",
	});
}

export default Component;

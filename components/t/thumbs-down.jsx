import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w9ohxtb1d.css';
import '../../css/a/aykpsibos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="w9ohxtb1d"/><path class="aykpsibos"/></g>`,
		"fallback": "doodle-icons:thumbs-down",
	});
}

export default Component;

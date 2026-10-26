import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p2vkxfrvz.css';
import '../../css/m/m-kcqjbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="p2vkxfrvz"/><path class="m-kcqjbvz"/></g>`,
		"fallback": "doodle-icons:party-hat",
	});
}

export default Component;

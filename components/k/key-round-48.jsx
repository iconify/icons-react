import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8q6kzbna.css';
import '../../css/a/a25ffhnff.css';
import '../../css/o/o3vxjxbdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8q6kzbna"/><path class="a25ffhnff"/><path class="o3vxjxbdl"/>`,
		"fallback": "energy-icons:key-round-48",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh8pb8bip.css';
import '../../css/l/l19bqcctk.css';
import '../../css/c/cs433rzwf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh8pb8bip"/><path class="l19bqcctk"/><path class="cs433rzwf"/>`,
		"fallback": "energy-icons:message-plus-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-22auf4m.css';
import '../../css/h/h2afzob3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-22auf4m"/><path class="h2afzob3l"/>`,
		"fallback": "famicons:reload-sharp",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz73jtbrx.css';
import '../../css/j/j8m18acze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz73jtbrx"/><path class="j8m18acze"/>`,
		"fallback": "energy-icons:set-square-48",
	});
}

export default Component;

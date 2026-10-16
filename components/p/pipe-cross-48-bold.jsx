import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jycek3qdf.css';
import '../../css/a/aow2a9b7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jycek3qdf"/><path class="aow2a9b7q"/>`,
		"fallback": "energy-icons:pipe-cross-48-bold",
	});
}

export default Component;

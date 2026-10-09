import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj1y5cbbe.css';
import '../../css/x/x1xqvkh1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj1y5cbbe"/><path class="x1xqvkh1w"/>`,
		"fallback": "energy-icons:oscilloscope-48-bold",
	});
}

export default Component;

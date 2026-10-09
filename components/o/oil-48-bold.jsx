import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpu4n9bbu.css';
import '../../css/r/r5moseb1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpu4n9bbu"/><path class="r5moseb1w"/>`,
		"fallback": "energy-icons:oil-48-bold",
	});
}

export default Component;

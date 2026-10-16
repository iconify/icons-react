import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgiazbbrf.css';
import '../../css/s/sf7om5bde.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgiazbbrf"/><path class="sf7om5bde"/>`,
		"fallback": "energy-icons:panel-left-open-20",
	});
}

export default Component;

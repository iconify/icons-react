import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/ozbdiq3aa.css';
import '../../css/g/g-zi73ava.css';
import '../../css/g/g698gzb4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="ozbdiq3aa"/><path class="g-zi73ava"/><path class="g698gzb4o"/></g>`,
		"fallback": "icon-park:iphone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml6m6q55w.css';
import '../../css/y/ybtkb5jlq.css';
import '../../css/o/o9f6xfbtl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml6m6q55w"/><path class="ybtkb5jlq"/><path class="o9f6xfbtl"/>`,
		"fallback": "energy-icons:washer-48-bold",
	});
}

export default Component;

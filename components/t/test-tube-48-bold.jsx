import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siepju6rr.css';
import '../../css/o/o2a3vtbnh.css';
import '../../css/p/p6ygvpb6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siepju6rr"/><path class="o2a3vtbnh"/><path class="p6ygvpb6y"/>`,
		"fallback": "energy-icons:test-tube-48-bold",
	});
}

export default Component;

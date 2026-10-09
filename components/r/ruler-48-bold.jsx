import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8al9ob1t.css';
import '../../css/u/us-05tkac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8al9ob1t"/><path class="us-05tkac"/>`,
		"fallback": "energy-icons:ruler-48-bold",
	});
}

export default Component;

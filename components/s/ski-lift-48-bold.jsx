import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwvj6mb8y.css';
import '../../css/n/nb5248_8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwvj6mb8y"/><path class="nb5248_8r"/>`,
		"fallback": "energy-icons:ski-lift-48-bold",
	});
}

export default Component;

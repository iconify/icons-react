import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svb9bze3d.css';
import '../../css/m/mfy25ks6s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svb9bze3d"/><path class="mfy25ks6s"/>`,
		"fallback": "energy-icons:smartphone-charging-48-bold",
	});
}

export default Component;

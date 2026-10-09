import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aofe76cbq.css';
import '../../css/g/gxgezbb4t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aofe76cbq"/><path class="gxgezbb4t"/>`,
		"fallback": "energy-icons:interconnector-48-bold",
	});
}

export default Component;

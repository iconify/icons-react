import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvxin6bpa.css';
import '../../css/d/dnwij0b-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvxin6bpa"/><path class="dnwij0b-f"/>`,
		"fallback": "energy-icons:solar-meter-48-bold",
	});
}

export default Component;

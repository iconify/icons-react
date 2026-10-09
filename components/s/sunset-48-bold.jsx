import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srxxy_b0g.css';
import '../../css/v/va3-tmdaw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srxxy_b0g"/><path class="va3-tmdaw"/>`,
		"fallback": "energy-icons:sunset-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qee7o7hwy.css';
import '../../css/r/rchtrhc_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qee7o7hwy"/><path class="rchtrhc_y"/>`,
		"fallback": "energy-icons:map-48-bold",
	});
}

export default Component;

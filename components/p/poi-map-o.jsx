import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq6a8xb0a.css';
import '../../css/o/okbbhw_ne.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq6a8xb0a"/><path class="okbbhw_ne"/>`,
		"fallback": "gis:poi-map-o",
	});
}

export default Component;

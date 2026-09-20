import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noegfwg_l.css';
import '../../css/r/r-a7fhb8w.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noegfwg_l"/><path class="r-a7fhb8w"/>`,
		"fallback": "medical-icon:mental-health",
	});
}

export default Component;

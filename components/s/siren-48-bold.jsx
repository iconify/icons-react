import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guu8cvajv.css';
import '../../css/d/dfl7556qi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guu8cvajv"/><path class="dfl7556qi"/>`,
		"fallback": "energy-icons:siren-48-bold",
	});
}

export default Component;

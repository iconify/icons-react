import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oab_xla-y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oab_xla-y"/>`,
		"fallback": "roentgen:sos-phone",
	});
}

export default Component;

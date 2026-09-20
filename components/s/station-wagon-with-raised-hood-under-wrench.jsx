import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7am3obid.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7am3obid"/>`,
		"fallback": "pinhead:station-wagon-with-raised-hood-under-wrench",
	});
}

export default Component;

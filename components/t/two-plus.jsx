import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcarc1g3a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcarc1g3a"/>`,
		"fallback": "pinhead:two-plus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzwk-5byy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzwk-5byy"/>`,
		"fallback": "pinhead:silo",
	});
}

export default Component;

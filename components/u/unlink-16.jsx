import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sko34mb7c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sko34mb7c"/>`,
		"fallback": "octicon:unlink-16",
	});
}

export default Component;

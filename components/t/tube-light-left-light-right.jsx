import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qws1l074c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qws1l074c"/>`,
		"fallback": "roentgen:tube-light-left-light-right",
	});
}

export default Component;

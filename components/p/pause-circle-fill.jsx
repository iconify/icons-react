import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfhs4vv5g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfhs4vv5g"/>`,
		"fallback": "f7:pause-circle-fill",
	});
}

export default Component;

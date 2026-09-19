import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtyx4x3lv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtyx4x3lv"/>`,
		"fallback": "icomoon-free:shift",
	});
}

export default Component;

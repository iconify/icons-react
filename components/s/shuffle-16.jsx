import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mou012obv.css';
import '../../css/o/ozw-6jbhh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mou012obv"/><path class="ozw-6jbhh"/>`,
		"fallback": "qlementine-icons:shuffle-16",
	});
}

export default Component;

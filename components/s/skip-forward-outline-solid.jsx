import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv39_2dwt.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv39_2dwt"/><path class="svdy80z7e"/>`,
		"fallback": "carbon:skip-forward-outline-solid",
	});
}

export default Component;

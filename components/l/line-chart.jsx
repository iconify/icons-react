import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qac519had.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qac519had"/>`,
		"fallback": "fluent-mdl2:line-chart",
	});
}

export default Component;

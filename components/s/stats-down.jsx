import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwimmtb7k.css';
import '../../css/w/wtjey9bqi.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwimmtb7k"/><path class="wtjey9bqi"/>`,
		"fallback": "lineicons:stats-down",
	});
}

export default Component;

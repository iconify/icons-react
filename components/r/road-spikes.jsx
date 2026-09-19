import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qly_2dbcc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qly_2dbcc"/>`,
		"fallback": "fa7-solid:road-spikes",
	});
}

export default Component;

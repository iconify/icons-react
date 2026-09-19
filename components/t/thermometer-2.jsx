import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsv_bw40g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsv_bw40g"/>`,
		"fallback": "fa7-solid:thermometer-2",
	});
}

export default Component;

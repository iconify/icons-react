import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hicvn82qc.css';

const viewBox = {"width":1792,"height":1824};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hicvn82qc"/>`,
		"fallback": "fa:send-o",
	});
}

export default Component;

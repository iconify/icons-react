import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apw_yjbts.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apw_yjbts"/>`,
		"fallback": "streamline:spray-paint",
	});
}

export default Component;

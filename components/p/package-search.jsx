import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bu19vwcrq.css';
import '../../css/g/g-385-cio.css';
import '../../css/g/gy7ztlgxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bu19vwcrq"/><path class="g-385-cio"/><circle class="gy7ztlgxu"/></g>`,
		"fallback": "lucide:package-search",
	});
}

export default Component;

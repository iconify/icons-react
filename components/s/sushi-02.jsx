import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gu943ccdr.css';
import '../../css/i/it7nrybuq.css';
import '../../css/d/dzd7g3bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gu943ccdr"/><path class="it7nrybuq"/><path class="dzd7g3bgc"/></g>`,
		"fallback": "hugeicons:sushi-02",
	});
}

export default Component;

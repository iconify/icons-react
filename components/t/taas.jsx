import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyobnvblh.css';
import '../../css/o/ofoa21war.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="uyobnvblh"/><path class="ofoa21war"/></g>`,
		"fallback": "cryptocurrency-color:taas",
	});
}

export default Component;

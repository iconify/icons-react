import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wasgbopjv.css';
import '../../css/a/a6kooab0m.css';
import '../../css/t/tup6i5txz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wasgbopjv"/><path class="a6kooab0m"/><path class="tup6i5txz"/></g>`,
		"fallback": "streamline-ultimate-color:safety-drown-hand",
	});
}

export default Component;

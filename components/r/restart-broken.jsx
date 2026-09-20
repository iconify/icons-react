import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mgljn7bfo.css';
import '../../css/z/znusfdc4c.css';
import '../../css/x/xsb0bgv9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mgljn7bfo"/><path class="znusfdc4c"/><path class="xsb0bgv9z"/></g>`,
		"fallback": "solar:restart-broken",
	});
}

export default Component;

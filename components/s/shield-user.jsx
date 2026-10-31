import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/eorhoxbnv.css';
import '../../css/b/b9pn4z2le.css';
import '../../css/y/ytvc4wbpy.css';
import '../../css/n/ny0nj65up.css';
import '../../css/t/t26vzccwj.css';
import '../../css/d/dd1zg1bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="eorhoxbnv wm-shadow"/><path class="b9pn4z2le wm-shadow"/><path class="ytvc4wbpy"/><path class="ny0nj65up"/><path class="t26vzccwj"/><path class="dd1zg1bdt"/></g>`,
		"fallback": "withicons-brutal:shield-user",
	});
}

export default Component;

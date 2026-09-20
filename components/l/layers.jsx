import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/u_s1wbbnd.css';
import '../../css/w/wiwxagn1a.css';
import '../../css/i/imc6ke7aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="u_s1wbbnd"/><path class="wiwxagn1a"/><path class="imc6ke7aq"/></g>`,
		"fallback": "proicons:layers",
	});
}

export default Component;

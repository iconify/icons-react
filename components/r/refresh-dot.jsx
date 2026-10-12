import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nswe24ysu.css';
import '../../css/g/gwoyifb9a.css';
import '../../css/i/i93joqjpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nswe24ysu"/><path class="gwoyifb9a"/><circle transform="rotate(90 12 12)" class="i93joqjpd"/></g>`,
		"fallback": "andrsrxn:refresh-dot",
	});
}

export default Component;

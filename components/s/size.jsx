import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nnt95obyn.css';
import '../../css/u/u7a3jrb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nnt95obyn"/><path class="u7a3jrb2u"/></g>`,
		"fallback": "reicon:size",
	});
}

export default Component;

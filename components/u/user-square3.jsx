import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/stfrz6bje.css';
import '../../css/n/nwyzuufrs.css';
import '../../css/f/flmf6fbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="stfrz6bje"/><path class="nwyzuufrs"/><path class="flmf6fbyy"/></g>`,
		"fallback": "reicon:user-square3",
	});
}

export default Component;

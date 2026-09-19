import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zcc2xqbte.css';
import '../../css/j/jaixgn-6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zcc2xqbte"/><path class="jaixgn-6i"/></g>`,
		"fallback": "iconoir:playstation-gamepad",
	});
}

export default Component;

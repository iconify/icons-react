import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a44pscc1r.css';
import '../../css/p/pzzss1ove.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a44pscc1r"/><path class="pzzss1ove"/></g>`,
		"fallback": "reicon:pen2",
	});
}

export default Component;

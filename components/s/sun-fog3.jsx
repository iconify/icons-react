import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hw4r2936h.css';
import '../../css/l/lno77o1-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hw4r2936h"/><path class="lno77o1-t"/></g>`,
		"fallback": "reicon:sun-fog3",
	});
}

export default Component;

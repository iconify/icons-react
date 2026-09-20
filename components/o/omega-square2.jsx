import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z6re8rbyg.css';
import '../../css/n/n5pi0-y4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z6re8rbyg"/><path class="n5pi0-y4l"/></g>`,
		"fallback": "reicon:omega-square2",
	});
}

export default Component;

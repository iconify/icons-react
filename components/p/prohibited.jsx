import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjma1yhgw.css';
import '../../css/y/yi3jdwbhm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fb76p4b_a.css';
import '../../css/y/yx3j-pcbw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yjma1yhgw"/><path class="yi3jdwbhm"/><g class="jn8qy4bru"><circle class="fb76p4b_a"/><path class="yx3j-pcbw"/></g>`,
		"fallback": "openmoji:prohibited",
	});
}

export default Component;

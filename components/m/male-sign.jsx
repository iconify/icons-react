import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g87xqnb5e.css';
import '../../css/x/x2qi6i_is.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/l/lak7h71xg.css';
import '../../css/m/mr0ernben.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g87xqnb5e"/><path class="x2qi6i_is"/><g class="jn8qy4bru"><path class="lak7h71xg"/><circle class="mr0ernben"/></g>`,
		"fallback": "openmoji:male-sign",
	});
}

export default Component;

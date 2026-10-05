import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b_3n6ybgo.css';
import '../../css/a/aozhopb2y.css';
import '../../css/f/fhv7l6bvd.css';
import '../../css/e/edjtn2bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="b_3n6ybgo"/><path class="aozhopb2y"/><path class="fhv7l6bvd"/><path class="edjtn2bks"/></g>`,
		"fallback": "matita:list",
	});
}

export default Component;

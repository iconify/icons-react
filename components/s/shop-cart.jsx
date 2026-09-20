import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n2neiybmu.css';
import '../../css/h/he2cb6v8q.css';
import '../../css/q/qhj_kmfui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n2neiybmu"/><path class="he2cb6v8q"/><path class="qhj_kmfui"/></g>`,
		"fallback": "streamline-freehand-color:shop-cart",
	});
}

export default Component;

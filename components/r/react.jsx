import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jq1l036pk.css';
import '../../css/z/zpl7y2bfy.css';
import '../../css/c/cykosrb4t.css';
import '../../css/w/wy0fhnajo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jq1l036pk"/><path class="zpl7y2bfy"/><path class="cykosrb4t"/><path class="wy0fhnajo"/></g>`,
		"fallback": "hugeicons:react",
	});
}

export default Component;

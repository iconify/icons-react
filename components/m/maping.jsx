import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ajpl9dbpk.css';
import '../../css/z/z3z439bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ajpl9dbpk"/><path class="z3z439bxv"/></g>`,
		"fallback": "hugeicons:maping",
	});
}

export default Component;

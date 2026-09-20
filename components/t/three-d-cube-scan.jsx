import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/erzeiv-ot.css';
import '../../css/w/whgfoj3ew.css';
import '../../css/z/z6bfi4byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="erzeiv-ot"/><path class="whgfoj3ew"/><path class="z6bfi4byi"/></g>`,
		"fallback": "reicon:three-d-cube-scan",
	});
}

export default Component;

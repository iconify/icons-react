import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ofg3t4b1p.css';
import '../../css/b/b64l0dbmf.css';
import '../../css/f/fj9t29bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ofg3t4b1p"/><path class="b64l0dbmf"/><path class="fj9t29bka"/></g>`,
		"fallback": "iconoir:rotate-camera-right",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovzl77bwj.css';
import '../../css/m/mf1r0nbce.css';
import '../../css/w/wz-tl9bco.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovzl77bwj"/><path class="mf1r0nbce"/><path class="wz-tl9bco"/>`,
		"fallback": "devicon:qwik",
	});
}

export default Component;

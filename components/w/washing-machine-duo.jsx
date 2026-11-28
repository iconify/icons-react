import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3yw06b5v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/te-6n-baq.css';
import '../../css/z/zl8cqbcxg.css';
import '../../css/q/qbvifnuxg.css';
import '../../css/p/pzop9j8jv.css';
import '../../css/n/n7t93sbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3yw06b5v secondary"/><g class="dt0cm9dhy primary"><path class="te-6n-baq"/><path class="zl8cqbcxg"/><path class="qbvifnuxg"/><path class="pzop9j8jv"/><path class="n7t93sbni"/></g>`,
		"fallback": "iconaut:washing-machine-duo",
	});
}

export default Component;

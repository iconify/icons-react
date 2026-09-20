import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyfg_cccn.css';
import '../../css/j/j_9xat6sj.css';
import '../../css/j/jrhkl8b8h.css';
import '../../css/j/jzggfvzxz.css';
import '../../css/z/z8sew1bgb.css';

const viewBox = {"width":390.02,"height":131.12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyfg_cccn"/><path class="j_9xat6sj"/><path class="jrhkl8b8h"/><path class="jzggfvzxz"/><path class="z8sew1bgb"/>`,
		"fallback": "thesvg-color:vidiq",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_r5ykbmt.css';
import '../../css/g/g2ony-pew.css';
import '../../css/r/rk9rf7bhq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_r5ykbmt"/><path class="g2ony-pew"/><path class="rk9rf7bhq"/></g>`,
		"fallback": "fluent-emoji-flat:purse",
	});
}

export default Component;

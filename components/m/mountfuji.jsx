import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qetnckbkp.css';
import '../../css/y/yr13g5spn.css';
import '../../css/d/d_cckzeas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qetnckbkp"/><path class="yr13g5spn"/><path class="d_cckzeas"/>`,
		"fallback": "fxemoji:mountfuji",
	});
}

export default Component;

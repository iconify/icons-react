import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp7_e5biu.css';
import '../../css/f/foa_mcc1x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp7_e5biu"/><path class="foa_mcc1x"/>`,
		"fallback": "fxemoji:sidewaysuppointingindex",
	});
}

export default Component;

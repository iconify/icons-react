import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3fi3cbul.css';
import '../../css/l/l_4g_xmjp.css';
import '../../css/a/adc7zwbbk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3fi3cbul"/><path class="l_4g_xmjp"/><path class="adc7zwbbk"/>`,
		"fallback": "energy-icons:phone-outgoing-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/ha2sv1bxa.css';
import '../../css/e/eicn2f-dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ha2sv1bxa"/><path class="eicn2f-dn"/></g>`,
		"fallback": "hugeicons:sticker",
	});
}

export default Component;

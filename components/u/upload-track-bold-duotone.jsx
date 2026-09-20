import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxr3okbyi.css';
import '../../css/l/l2tvh_zrw.css';
import '../../css/g/gm3qr28eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxr3okbyi"/><path class="l2tvh_zrw"/><path class="gm3qr28eb"/></g>`,
		"fallback": "solar:upload-track-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_p-gjbri.css';
import '../../css/c/c48cfqbel.css';
import '../../css/s/sfq3-pm0r.css';
import '../../css/p/p_w93idqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i_p-gjbri"/><path class="c48cfqbel"/><path class="sfq3-pm0r"/><path class="p_w93idqi"/></g>`,
		"fallback": "solar:turntable-minimalistic-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0_da6b0m.css';
import '../../css/z/zr3e3667p.css';
import '../../css/u/uw0f56fmz.css';
import '../../css/k/k0lfk7b3s.css';
import '../../css/l/l-ttvnh_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0_da6b0m wm-shadow"/><path class="wm-k zr3e3667p"/><path class="uw0f56fmz wm-k"/><path class="k0lfk7b3s wm-a"/><path class="l-ttvnh_e wm-a"/>`,
		"fallback": "withicons-pastel:shuffle",
	});
}

export default Component;

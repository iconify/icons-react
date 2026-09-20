import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/ky8hevb5b.css';
import '../../css/a/ahhqo1b4s.css';
import '../../css/i/icotk-bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ky8hevb5b"/><path class="ahhqo1b4s"/><path class="icotk-bsx"/></g>`,
		"fallback": "keyline-icons:power-off-sharp-duotone",
	});
}

export default Component;

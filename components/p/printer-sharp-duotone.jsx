import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vr0jqyb1p.css';
import '../../css/z/z_rd0kbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vr0jqyb1p"/><path clip-rule="evenodd" class="z_rd0kbjw"/></g>`,
		"fallback": "keyline-icons:printer-sharp-duotone",
	});
}

export default Component;

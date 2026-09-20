import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z4nzaob9p.css';
import '../../css/k/kqaeisbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z4nzaob9p"/><path class="kqaeisbkg"/></g>`,
		"fallback": "keyline-icons:key-sharp-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m-rom16pb.css';
import '../../css/n/n0efjqbrb.css';
import '../../css/l/lt_1--bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="n0efjqbrb"/><path clip-rule="evenodd" class="lt_1--bbq"/></g>`,
		"fallback": "keyline-icons:scan-qr-code-sharp-duotone",
	});
}

export default Component;

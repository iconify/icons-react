import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m-rom16pb.css';
import '../../css/v/vfe68gboq.css';
import '../../css/b/brz0lacck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="vfe68gboq"/><path clip-rule="evenodd" class="brz0lacck"/></g>`,
		"fallback": "keyline-icons:scan-eye-sharp-duotone",
	});
}

export default Component;

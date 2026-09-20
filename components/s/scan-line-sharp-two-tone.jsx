import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m-rom16pb.css';
import '../../css/x/xdk9_oksp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="xdk9_oksp"/></g>`,
		"fallback": "keyline-icons:scan-line-sharp-two-tone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m-rom16pb.css';
import '../../css/g/g4rgx1bsd.css';
import '../../css/k/ki4iswmtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="g4rgx1bsd"/><path clip-rule="evenodd" class="ki4iswmtp"/></g>`,
		"fallback": "keyline-icons:scan-search-sharp-duotone",
	});
}

export default Component;

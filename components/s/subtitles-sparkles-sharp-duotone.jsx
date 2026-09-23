import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/ztvaljb9d.css';
import '../../css/s/snibgdcaa.css';
import '../../css/y/yjs3j924h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ztvaljb9d"/><path class="snibgdcaa"/><path class="yjs3j924h"/></g>`,
		"fallback": "keyline-icons:subtitles-sparkles-sharp-duotone",
	});
}

export default Component;

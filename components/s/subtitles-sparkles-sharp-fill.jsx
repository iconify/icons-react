import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/ztvaljb9d.css';
import '../../css/x/xryi1b-ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ztvaljb9d"/><path class="xryi1b-ys"/></g>`,
		"fallback": "keyline-icons:subtitles-sparkles-sharp-fill",
	});
}

export default Component;

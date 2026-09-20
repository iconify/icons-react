import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ijzbaybvc.css';
import '../../css/z/zytpuv9_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ijzbaybvc"/><path class="zytpuv9_v"/></g>`,
		"fallback": "streamline-sharp-color:no-word-wrap",
	});
}

export default Component;

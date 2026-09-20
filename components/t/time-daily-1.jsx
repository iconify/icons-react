import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lzq447bpg.css';
import '../../css/i/iw84g7bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lzq447bpg"/><path class="iw84g7bxw"/></g>`,
		"fallback": "streamline-ultimate:time-daily-1",
	});
}

export default Component;

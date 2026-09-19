import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sa1_onb3l.css';
import '../../css/y/yv110bbwp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sa1_onb3l"/><path class="yv110bbwp"/></g>`,
		"fallback": "glyphs:music-list-duo",
	});
}

export default Component;

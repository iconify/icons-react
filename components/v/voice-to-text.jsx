import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gro-vo5gp.css';
import '../../css/y/yt3yiacyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gro-vo5gp"/><path class="yt3yiacyo"/></g>`,
		"fallback": "hugeicons:voice-to-text",
	});
}

export default Component;

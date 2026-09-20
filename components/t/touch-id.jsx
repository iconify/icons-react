import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gfz8yd99h.css';
import '../../css/v/vto9q9z-a.css';
import '../../css/g/g4m9b9nye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gfz8yd99h"/><path class="vto9q9z-a"/><path class="g4m9b9nye"/></g>`,
		"fallback": "streamline-ultimate:touch-id",
	});
}

export default Component;

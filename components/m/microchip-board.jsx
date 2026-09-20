import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lgb3sjbex.css';
import '../../css/a/ai_50vbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lgb3sjbex"/><path class="ai_50vbqb"/></g>`,
		"fallback": "streamline-ultimate:microchip-board",
	});
}

export default Component;

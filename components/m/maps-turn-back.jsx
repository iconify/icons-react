import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sz5ctk30z.css';
import '../../css/c/cnf_zew0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sz5ctk30z"/><path class="cnf_zew0b"/></g>`,
		"fallback": "iconoir:maps-turn-back",
	});
}

export default Component;

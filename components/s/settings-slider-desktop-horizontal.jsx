import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld_h50eyi.css';
import '../../css/s/s_ppo_bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ld_h50eyi"/><path class="s_ppo_bjp"/></g>`,
		"fallback": "streamline-ultimate:settings-slider-desktop-horizontal",
	});
}

export default Component;

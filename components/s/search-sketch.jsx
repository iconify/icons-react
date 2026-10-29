import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zh75_ac2u.css';
import '../../css/h/h616jyu9u.css';
import '../../css/i/ibuxjwbgw.css';
import '../../css/k/kyavumnzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zh75_ac2u"/><path class="h616jyu9u wm-a"/><path class="ibuxjwbgw wm-k"/><path class="kyavumnzm wm-a"/></g>`,
		"fallback": "withicons:search-sketch",
	});
}

export default Component;

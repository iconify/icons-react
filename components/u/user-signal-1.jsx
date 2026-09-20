import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/df4ev_7nm.css';
import '../../css/h/h39uz7b6t.css';
import '../../css/l/laoxocbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="df4ev_7nm"/><path class="h39uz7b6t"/><path class="laoxocbtm"/></g>`,
		"fallback": "streamline-ultimate:user-signal-1",
	});
}

export default Component;

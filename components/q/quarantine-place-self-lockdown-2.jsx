import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-g0_cb1m.css';
import '../../css/r/r3b6ktb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s-g0_cb1m"/><path class="r3b6ktb9s"/></g>`,
		"fallback": "covid:quarantine-place-self-lockdown-2",
	});
}

export default Component;

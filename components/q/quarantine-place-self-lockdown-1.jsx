import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-g0_cb1m.css';
import '../../css/t/t3lan-pvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s-g0_cb1m"/><path class="t3lan-pvu"/></g>`,
		"fallback": "covid:quarantine-place-self-lockdown-1",
	});
}

export default Component;

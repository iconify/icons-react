import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w32r3bt9j.css';
import '../../css/m/mae2hpb4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w32r3bt9j"/><path class="mae2hpb4q"/></g>`,
		"fallback": "streamline:netflix",
	});
}

export default Component;

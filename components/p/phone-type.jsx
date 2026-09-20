import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y9w5pac2a.css';
import '../../css/b/bb-d19b-k.css';
import '../../css/r/r755v_b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y9w5pac2a"/><path class="bb-d19b-k"/><path class="r755v_b0m"/></g>`,
		"fallback": "streamline-ultimate:phone-type",
	});
}

export default Component;

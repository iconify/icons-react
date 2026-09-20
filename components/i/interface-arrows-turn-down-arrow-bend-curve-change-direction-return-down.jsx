import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s1i2nb_uo.css';
import '../../css/l/l4an57axg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s1i2nb_uo"/><path class="l4an57axg"/></g>`,
		"fallback": "streamline:interface-arrows-turn-down-arrow-bend-curve-change-direction-return-down",
	});
}

export default Component;

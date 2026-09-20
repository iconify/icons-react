import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gtt4t2bjv.css';
import '../../css/v/v999r7bpq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gtt4t2bjv"/><path class="v999r7bpq"/></g>`,
		"fallback": "streamline:sign-at",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lbbonebbv.css';
import '../../css/v/v9nm_-upg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="lbbonebbv"/><path class="v9nm_-upg"/></g>`,
		"fallback": "streamline:interface-user-single-close-geometric-human-person-single-up-user",
	});
}

export default Component;

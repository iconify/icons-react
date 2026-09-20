import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ev2j-fb2a.css';
import '../../css/c/cujxzlbej.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ev2j-fb2a"/><path class="cujxzlbej"/></g>`,
		"fallback": "streamline:interface-file-double-file-common-double",
	});
}

export default Component;

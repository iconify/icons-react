import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qlk0hs3ck.css';
import '../../css/a/apxd55bvs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qlk0hs3ck"/><path class="apxd55bvs"/></g>`,
		"fallback": "streamline:straight-cap",
	});
}

export default Component;

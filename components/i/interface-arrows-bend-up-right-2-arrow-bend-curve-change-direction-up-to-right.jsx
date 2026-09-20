import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/somk75bve.css';
import '../../css/a/aut7-_08f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="somk75bve"/><path class="aut7-_08f"/></g>`,
		"fallback": "streamline:interface-arrows-bend-up-right-2-arrow-bend-curve-change-direction-up-to-right",
	});
}

export default Component;

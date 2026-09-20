import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/snf70z_9b.css';
import '../../css/a/a84nvnbir.css';
import '../../css/e/epl_q__wp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="snf70z_9b"/><path class="a84nvnbir"/><path class="epl_q__wp"/></g>`,
		"fallback": "streamline:startup",
	});
}

export default Component;

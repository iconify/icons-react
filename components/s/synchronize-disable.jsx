import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q46tmpbhq.css';
import '../../css/r/r478oyb_j.css';
import '../../css/a/arhfsyxqn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q46tmpbhq"/><path class="r478oyb_j"/><path class="arhfsyxqn"/></g>`,
		"fallback": "streamline:synchronize-disable",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bbro-aclm.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/r/rj8wk8f8k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bbro-aclm"/><path class="r2th9g7qg"/><path class="rj8wk8f8k"/></g>`,
		"fallback": "streamline:smiley-surprised",
	});
}

export default Component;

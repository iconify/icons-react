import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efs7akbeh.css';
import '../../css/b/bmkr64bli.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="efs7akbeh"/><path class="bmkr64bli"/></g>`,
		"fallback": "glyphs:users",
	});
}

export default Component;

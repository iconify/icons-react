import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw2x8uv0r.css';
import '../../css/n/n35lynbiq.css';
import '../../css/q/q31b4pb4t.css';
import '../../css/g/g68vp-b3y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aw2x8uv0r"/><path class="n35lynbiq"/><path clip-rule="evenodd" class="q31b4pb4t"/><path class="g68vp-b3y"/></g>`,
		"fallback": "glyphs:music-list-outline",
	});
}

export default Component;

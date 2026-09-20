import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p0ha2d9la.css';
import '../../css/b/bdpagub4t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p0ha2d9la"/><path class="bdpagub4t"/></g>`,
		"fallback": "streamline:nature-ecology-leaf-environment-leaf-ecology-plant-plants-eco",
	});
}

export default Component;

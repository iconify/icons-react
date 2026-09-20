import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/odbtl65bb.css';
import '../../css/g/gg2v5d73k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="odbtl65bb"/><path class="gg2v5d73k"/></g>`,
		"fallback": "streamline-flex:target",
	});
}

export default Component;

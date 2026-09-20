import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h_214em3i.css';
import '../../css/e/eq98ucc7l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h_214em3i"/><path class="eq98ucc7l"/></g>`,
		"fallback": "streamline-flex:recycle-bin",
	});
}

export default Component;

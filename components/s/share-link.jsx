import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yr13dvb0y.css';
import '../../css/j/jyz31f_av.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yr13dvb0y"/><path class="jyz31f_av"/></g>`,
		"fallback": "streamline-flex:share-link",
	});
}

export default Component;

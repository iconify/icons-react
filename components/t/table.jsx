import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wge0bn79j.css';
import '../../css/j/jfhgehbko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wge0bn79j"/><path class="jfhgehbko"/></g>`,
		"fallback": "streamline-flex:table",
	});
}

export default Component;

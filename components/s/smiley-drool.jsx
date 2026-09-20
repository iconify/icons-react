import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jkd34csuc.css';
import '../../css/w/wy61nkyxp.css';
import '../../css/q/qqyvi1dwg.css';
import '../../css/h/h_cm8pmfh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jkd34csuc"/><path class="wy61nkyxp"/><path class="qqyvi1dwg"/><path class="h_cm8pmfh"/></g>`,
		"fallback": "streamline:smiley-drool",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ekct8wbyt.css';
import '../../css/m/mlv98qbin.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ekct8wbyt"/><path class="mlv98qbin"/></g>`,
		"fallback": "streamline-flex:monitor-error",
	});
}

export default Component;

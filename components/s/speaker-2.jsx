import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tu6vefbia.css';
import '../../css/d/dlskuvbjf.css';
import '../../css/s/s041z_1vw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tu6vefbia"/><path class="dlskuvbjf"/><path class="s041z_1vw"/></g>`,
		"fallback": "streamline:speaker-2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cgesq6bin.css';
import '../../css/v/vdy_02tyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cgesq6bin"/><path class="vdy_02tyl"/></g>`,
		"fallback": "streamline:screen-2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjglgob4e.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/o/o57y7abgr.css';
import '../../css/o/o-hdpccfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGs3DbYYGF" class="jjglgob4e"/></defs><g class="ft5dv1b6b"><use href="#SVGs3DbYYGF"/><g class="p_3zmsvya"><path class="o57y7abgr"/><use href="#SVGs3DbYYGF"/></g><path class="o-hdpccfe"/></g>`,
		"fallback": "tdesign:mobile-vibrate",
	});
}

export default Component;

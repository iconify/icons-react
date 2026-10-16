import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxjzlsahc.css';
import '../../css/t/twd5vebap.css';
import '../../css/c/cn8zeebmg.css';
import '../../css/g/gbh5adcqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxjzlsahc"/><path clip-rule="evenodd" class="twd5vebap"/><path class="cn8zeebmg"/><path class="gbh5adcqi"/></g>`,
		"fallback": "andrsrxn:video-sound-wave",
	});
}

export default Component;

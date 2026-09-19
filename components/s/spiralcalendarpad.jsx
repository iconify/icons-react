import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfonkl3tm.css';
import '../../css/f/ff9oe5f4b.css';
import '../../css/u/ud97m9_ht.css';
import '../../css/e/ejtxx9bgq.css';
import '../../css/e/echjmcczc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfonkl3tm"/><path class="ff9oe5f4b"/><path class="ud97m9_ht"/><path class="ejtxx9bgq"/><path class="echjmcczc"/>`,
		"fallback": "fxemoji:spiralcalendarpad",
	});
}

export default Component;

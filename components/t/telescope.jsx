import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/amn-swbyv.css';
import '../../css/k/k-5wtep8z.css';
import '../../css/z/z6_73rb1p.css';
import '../../css/e/eds0rocpp.css';
import '../../css/l/l9193mbcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="amn-swbyv wm-shadow"/><path class="k-5wtep8z wm-shadow"/><path class="z6_73rb1p"/><path class="eds0rocpp"/><path class="l9193mbcw"/></g>`,
		"fallback": "withicons-brutal:telescope",
	});
}

export default Component;

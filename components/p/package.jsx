import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uu5hjdb0p.css';
import '../../css/o/o-youubmf.css';
import '../../css/k/k-5xp0p9n.css';
import '../../css/n/np4ab2bpj.css';
import '../../css/o/oih__vbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uu5hjdb0p wm-shadow"/><path class="o-youubmf wm-shadow"/><path class="k-5xp0p9n"/><path class="np4ab2bpj"/><path class="oih__vbqa"/></g>`,
		"fallback": "withicons-brutal:package",
	});
}

export default Component;

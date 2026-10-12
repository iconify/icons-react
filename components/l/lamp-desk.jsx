import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1ofoyb7f.css';
import '../../css/b/b_wkbkxcw.css';
import '../../css/x/xptg4acky.css';
import '../../css/u/uvkt82bzy.css';
import '../../css/i/ioy27tbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n1ofoyb7f"/><circle transform="rotate(90 5 13.9)" class="b_wkbkxcw"/><path class="xptg4acky"/><circle transform="rotate(90 5 13.9)" class="uvkt82bzy"/><path class="ioy27tbun"/></g>`,
		"fallback": "andrsrxn:lamp-desk",
	});
}

export default Component;

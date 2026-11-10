import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krpzqqbft.css';
import '../../css/f/fgfzqmx6k.css';
import '../../css/v/va3gykbxr.css';
import '../../css/x/x0td-_mzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="krpzqqbft"/><path class="fgfzqmx6k"/><path class="va3gykbxr"/><path class="x0td-_mzu"/></g>`,
		"fallback": "andrsrxn:seek-forward-sixty-rtl",
	});
}

export default Component;

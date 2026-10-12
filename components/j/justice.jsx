import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh3w77bch.css';
import '../../css/n/nljbfnawl.css';
import '../../css/k/kq6il2bnl.css';
import '../../css/r/r2204dhie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 4.49)" class="sh3w77bch"/><path class="nljbfnawl"/><circle transform="rotate(90 12 4.49)" class="kq6il2bnl"/><path class="r2204dhie"/></g>`,
		"fallback": "andrsrxn:justice",
	});
}

export default Component;

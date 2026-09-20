import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f09zsl64j.css';
import '../../css/d/d1nhelfrt.css';
import '../../css/b/bfa2m-0cx.css';
import '../../css/l/l01kxcbuy.css';
import '../../css/y/y6txs1bca.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f09zsl64j"/><path class="d1nhelfrt"/><path class="bfa2m-0cx"/><path class="l01kxcbuy"/><path class="y6txs1bca"/></g>`,
		"fallback": "streamline-flex-color:tall-hat",
	});
}

export default Component;

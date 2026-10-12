import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgfq5ibji.css';
import '../../css/r/ra3wyebgx.css';
import '../../css/o/o51ywpkjy.css';
import '../../css/x/xtrpm4bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dgfq5ibji"/><path class="ra3wyebgx"/><circle class="o51ywpkjy"/><circle class="xtrpm4bxl"/></g>`,
		"fallback": "andrsrxn:sale",
	});
}

export default Component;

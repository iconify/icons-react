import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/unxg39bqi.css';
import '../../css/f/f7e5bnbcw.css';
import '../../css/e/e_fu26n9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="unxg39bqi"/><path class="f7e5bnbcw"/><path class="e_fu26n9v"/></g>`,
		"fallback": "streamline-sharp-color:wallet-purse",
	});
}

export default Component;

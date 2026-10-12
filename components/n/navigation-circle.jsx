import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyb28ckrw.css';
import '../../css/k/khdkximwp.css';
import '../../css/k/kl6yteaiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kyb28ckrw"/><path class="khdkximwp"/><path class="kl6yteaiw"/></g>`,
		"fallback": "andrsrxn:navigation-circle",
	});
}

export default Component;

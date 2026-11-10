import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a8bwf-6ur.css';
import '../../css/u/uf4tivbrb.css';
import '../../css/t/tr5bubbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="a8bwf-6ur"/><path class="uf4tivbrb"/><path class="tr5bubbay"/></g>`,
		"fallback": "matita:psi-capital",
	});
}

export default Component;

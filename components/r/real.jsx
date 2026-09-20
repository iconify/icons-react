import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iupyxnbgc.css';
import '../../css/m/mabwzbbvc.css';
import '../../css/c/cj8-pez3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iupyxnbgc"/><path class="mabwzbbvc"/><path class="cj8-pez3q"/>`,
		"fallback": "nimbus:real",
	});
}

export default Component;
